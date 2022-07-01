import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { ProductsProvider } from './Providers/products';
import { CartProvider } from './Providers/cart';
import { ThemeProvider } from './Providers/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);