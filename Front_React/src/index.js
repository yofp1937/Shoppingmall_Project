import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import Header from './pages/Header';
import Body from './pages/Body';
import Footer from './pages/Footer';

const body = ReactDOM.createRoot(document.body);
body.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
);