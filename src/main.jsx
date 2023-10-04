import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './GlobalStyles.js'
import { MenuProvider } from './context/ToggleContext'
import { StyleSheetManager } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
    <GlobalStyles />
    <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isError'}>
    <App />
    </StyleSheetManager>
    </MenuProvider>
  </React.StrictMode>,
)
