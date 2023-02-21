import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Global from './style/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>  
    <React.StrictMode>
      <Global />
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
