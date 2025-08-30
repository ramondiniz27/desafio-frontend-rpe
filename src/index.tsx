import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import { worker } from './mocks/browser';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
worker.start();
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
