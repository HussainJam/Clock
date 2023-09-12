import React from 'react'
import ReactDOM from 'react-dom/client'
import Clock from './Components/Clock.jsx'
import Apps from './Components/Apps.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Clock />
    <Apps />
  </React.StrictMode>,
)
