import React from 'react'

export default function Header() {
  const time = new Date().toLocaleTimeString([], {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  })
  return <header>{time}</header>
}
