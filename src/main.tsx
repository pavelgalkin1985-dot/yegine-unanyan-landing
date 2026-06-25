import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import './styles.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Root element not found. Ensure index.html contains <div id="root"></div>.',
  );
}

createRoot(container).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
