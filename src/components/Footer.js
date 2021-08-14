import React from 'react'
import { ReactComponent as SettingsIcon } from '../icons/settings.svg'
import { ReactComponent as ListIcon } from '../icons/list.svg'

export default function Footer({ setLocation, setShowDetails, showDetails }) {
  return (
    <footer>
      <SettingsIcon
        className='icon'
        width='24'
        onClick={() => setLocation(null)}
      />
      <ListIcon
        className='icon'
        width='24'
        onClick={() => setShowDetails(showDetails ? false : true)}
      />
    </footer>
  )
}
