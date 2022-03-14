import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './context/Context';

ReactDOM.render(
  <BrowserRouter>
    <CartContext>
      <App />
    </CartContext>
  </BrowserRouter>,
  document.getElementById('root')
);
