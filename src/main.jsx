import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
        <Route path="/category/:id" element={<ItemListContainer />} /> 
        <Route path="/item/:id" element={<ItemDetailContainer />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
