import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'
import App from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
</React.StrictMode>
)
