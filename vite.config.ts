import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';
import {handleContactRequest, type ContactEnv} from './src/server/contactApi';

function urunkContactApiDevPlugin(devEnv: ContactEnv): Plugin {
  return {
    name: 'urunk-contact-api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const rawUrl = req.url || '';
        const pathname = rawUrl.split('?')[0];
        if (pathname !== '/api/contact' && pathname !== '/api/contact/') {
          next();
          return;
        }

        try {
          const host = req.headers.host || 'localhost:3000';
          const forwardedProto = String(req.headers['x-forwarded-proto'] || 'http')
            .split(',')[0]
            .trim();
          const forwardedHost = String(req.headers['x-forwarded-host'] || '')
            .split(',')[0]
            .trim();
          const effectiveHost = forwardedHost || host;
          const devOriginCandidates = [
            `${forwardedProto}://${effectiveHost}`,
            process.env.APP_URL || '',
            process.env.SHARED_APP_URL || '',
          ]
            .map((v) => v.trim())
            .filter(Boolean)
            .join(',');
          const allowForwardedDevOrigin = devOriginCandidates || undefined;

          const headers = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (Array.isArray(value)) {
              headers.set(key, value.join(', '));
            } else if (typeof value === 'string') {
              headers.set(key, value);
            }
          }

          const method = (req.method || 'GET').toUpperCase();
          let bodyBytes: Uint8Array | undefined;

          if (method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS') {
            const chunks: Buffer[] = [];
            let total = 0;
            const cap = 16 * 1024 + 64; // allow exceeding 16KB slightly so handleContactRequest returns 413
            await new Promise<void>((resolve, reject) => {
              req.on('data', (chunk: Buffer) => {
                if (total <= cap) {
                  chunks.push(chunk);
                  total += chunk.byteLength;
                }
              });
              req.on('end', () => resolve());
              req.on('error', (err) => reject(err));
            });
            bodyBytes = new Uint8Array(Buffer.concat(chunks));
          }

          const webReq = new Request(`${forwardedProto}://${effectiveHost}${rawUrl}`, {
            method,
            headers,
            body: bodyBytes,
          });

          const clientIp =
            String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1');

          const liveDevEnv: ContactEnv = {
            RESEND_API_KEY: process.env.RESEND_API_KEY || devEnv.RESEND_API_KEY,
            CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL || devEnv.CONTACT_TO_EMAIL,
            CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL || devEnv.CONTACT_FROM_EMAIL,
            ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || devEnv.ALLOWED_ORIGINS,
            ALL_ALLOWED_ORIGINS: process.env.ALL_ALLOWED_ORIGINS || devEnv.ALL_ALLOWED_ORIGINS,
          };

          const webRes = await handleContactRequest(webReq, liveDevEnv, {
            clientIp,
            allowForwardedDevOrigin,
          });

          res.statusCode = webRes.status;
          webRes.headers.forEach((value, key) => {
            res.setHeader(key, value);
          });
          const respText = await webRes.text();
          res.end(respText);
        } catch {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(JSON.stringify({ok: false, code: 'INTERNAL_ERROR'}));
        }
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const fileEnv = loadEnv(mode, process.cwd(), '');
  const contactEnv: ContactEnv = {
    RESEND_API_KEY: process.env.RESEND_API_KEY || fileEnv.RESEND_API_KEY,
    CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL || fileEnv.CONTACT_TO_EMAIL,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL || fileEnv.CONTACT_FROM_EMAIL,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || fileEnv.ALLOWED_ORIGINS,
    ALL_ALLOWED_ORIGINS: process.env.ALL_ALLOWED_ORIGINS || fileEnv.ALL_ALLOWED_ORIGINS,
  };
  return {
    plugins: [urunkContactApiDevPlugin(contactEnv), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      minify: 'esbuild' as const,
      cssMinify: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          hashCharacters: 'base36',
          entryFileNames: 'assets/index-[hash].js',
          chunkFileNames(chunkInfo) {
            const rawName = chunkInfo.name || 'chunk';
            const cleanName = rawName
              .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
              .replace(/[^a-zA-Z0-9-]+/g, '-')
              .replace(/-+/g, '-')
              .replace(/^-|-$/g, '')
              .toLowerCase();
            if (cleanName.startsWith('vendor-')) {
              return `assets/${cleanName}-[hash].js`;
            }
            return `assets/chunk-${cleanName || 'module'}-[hash].js`;
          },
          assetFileNames(assetInfo) {
            const originalName = assetInfo.names?.[0] || assetInfo.name || 'asset';
            const ext = path.extname(originalName).toLowerCase();
            const base = path.basename(originalName, path.extname(originalName));
            const cleanName = base
              .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
              .replace(/[^a-zA-Z0-9-]+/g, '-')
              .replace(/-+/g, '-')
              .replace(/^-|-$/g, '')
              .toLowerCase();
            return `assets/${cleanName || 'asset'}-[hash]${ext || '[extname]'}`;
          },
          manualChunks(id) {
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/react-router') || id.includes('node_modules/@remix-run/router')) {
              return 'vendor-router';
            }
            if (id.includes('node_modules/motion/') || id.includes('node_modules/framer-motion/')) {
              return 'vendor-motion';
            }
            if (id.includes('node_modules/react-helmet-async/')) {
              return 'vendor-helmet';
            }
            if (id.includes('node_modules/lucide-react/')) {
              return 'vendor-icons';
            }
            if (id.includes('/src/data/blogPostsEN')) {
              return 'blog-posts-en';
            }
            if (id.includes('/src/data/blogPostsFR')) {
              return 'blog-posts-fr';
            }
          },
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as true,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
