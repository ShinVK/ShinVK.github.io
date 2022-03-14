import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';

ReactDOM.render(
  <ParallaxProvider>
    <BrowserRouter basebane={ process.eventNames.PUBLIC_URL }>
      <App />
    </BrowserRouter>
  </ParallaxProvider>,
  document.getElementById('root'),
);
