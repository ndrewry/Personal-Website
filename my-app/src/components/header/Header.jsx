import React from 'react'
import './header.css'
import CTA from './CTA'
import CUTE from '../../assets/cute1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Nicole Drewry</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CTA />
        <HeaderSocials/>


        <div className="cute">
          <img src={CUTE} alt="cute1"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header