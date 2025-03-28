import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import GifCreator from './pages/GifCreator.tsx';
import { LanguageProvider } from './lib/i18n/LanguageContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gif-maker" element={<GifCreator />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);