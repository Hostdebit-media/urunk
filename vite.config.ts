import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
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
