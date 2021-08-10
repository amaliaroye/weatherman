import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

const units = {
  imperial: {
    type: 'imperial',
    temp: 'F',
  },
  metric: {
    type: 'metric',
    temp: 'C',
  },
}
export const UnitContext = React.createContext(units.imperial)

ReactDOM.render(
  <React.StrictMode>
    <UnitContext.Provider value={units.imperial}>
      <App />
    </UnitContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
