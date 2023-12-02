
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ContextOdont from './context/OdontContext.jsx'; 
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ContextOdont>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </ContextOdont>
  </BrowserRouter>
)
