import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

// Recover cleanly if a new deployment invalidated a lazy-loaded route chunk while the tab remained open
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  try {
    const reloadKey = `urunk_chunk_reload_${window.location.pathname}`;
    if (!sessionStorage.getItem(reloadKey)) {
      sessionStorage.setItem(reloadKey, '1');
      window.location.reload();
    }
  } catch {
    window.location.reload();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
