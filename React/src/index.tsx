import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { GlobalStyle } from './UI/GlobalStyle';
import Header from './UI/HeaderStyle';
import Navigation from './Navigation/Navigation';
import Footer from './UI/Footer';
import { LanguageProvider } from './i18n/LanguageContext';

createRoot(document.getElementById("root")!)
  .render(
    <React.StrictMode>
      <LanguageProvider>
        <HashRouter>
          <GlobalStyle />
          <Header />
          <Navigation />
          <Footer />
        </HashRouter>
      </LanguageProvider>
    </React.StrictMode>
  );
