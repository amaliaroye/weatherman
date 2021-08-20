import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.scss'
import { UnitProvider } from './UnitContext'

ReactDOM.render(
  <React.StrictMode>
    <UnitProvider>
      <App />
    </UnitProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
