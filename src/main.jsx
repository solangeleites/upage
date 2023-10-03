import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './GlobalStyles.js'
import { MenuProvider } from './context/ToggleContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
    <GlobalStyles />
    <App />
    </MenuProvider>
  </React.StrictMode>,
)
