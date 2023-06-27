import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {SizeContext} from './context/SizeContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SizeContext>
      <App />
    </SizeContext>
  </React.StrictMode>,
)
