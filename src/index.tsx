import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { startWorker } = await import('./mocks/browser');
  return startWorker();
}

enableMocking().then(() => {
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
});
