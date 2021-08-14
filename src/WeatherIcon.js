import React from 'react'
import icons from './icons.svg'

export default function WeatherIcon({ condition }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
    >
      <use xlinkHref={`${icons}#${condition.toLowerCase()}`} />
    </svg>
  )
}
