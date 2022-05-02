import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  return (
    <div className='bg-color_Midnight_Express_DB pl-48 grid grid-cols-2 pt-4 pb-4 pr-48'>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div></div>
    </div>
  )
}

export default Header