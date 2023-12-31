import reportWebVitals from './reportWebVitals';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './UI/GlobalStyle';
import Header from './UI/HeaderStyle';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from './Navigation/RouteObjects';
import Navigation from './Navigation/Navigation';


createRoot(document.getElementById("root")!)
  .render(
    <React.StrictMode>
      <GlobalStyle />
      <Header />
      <Navigation />
      {/* <RouterProvider router={createBrowserRouter(routes())} /> */}
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
