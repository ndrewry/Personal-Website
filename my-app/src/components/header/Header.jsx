import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Nicole Drewry</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CTA />
        <HeaderSocials/>
        
      </div>
    </header>
  )
}

export default Header