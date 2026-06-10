import reportWebVitals from './reportWebVitals';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './UI/GlobalStyle';
import Header from './UI/HeaderStyle';
import Navigation from './Navigation/Navigation';


createRoot(document.getElementById("root")!)
  .render(
    <React.StrictMode>
      <GlobalStyle />
      <Header />
      <Navigation />
    </React.StrictMode>
  );
