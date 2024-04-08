import React from 'react'
import ReactDOM from 'react-dom/client'
import  Home from './pages/home.jsx'
import { BrowserRouter } from 'react-router-dom'
import Store from './pages/store.jsx'


const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Store />
    </BrowserRouter>
  </React.StrictMode>
)

