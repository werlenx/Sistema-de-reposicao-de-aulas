import React from 'react'
import ReactDOM from 'react-dom'
import AppRoutes from './routes/routes.jsx'
import { GlobalStyle } from './style/Globalstyle.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
