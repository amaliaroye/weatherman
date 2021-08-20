import React, { createContext, useState } from 'react'
const unitOptions = {
  imperial: {
    type: 'imperial',
    temp: 'F',
    speed: 'mph',
    distance: 'mi',
  },
  metric: {
    type: 'metric',
    temp: 'C',
    speed: 'mps',
    distance: 'km',
  },
}
export const UnitContext = createContext()

export const UnitProvider = ({ children }) => {
  const [units, setUnits] = useState(unitOptions.imperial)
  return (
    <UnitContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitContext.Provider>
  )
}
