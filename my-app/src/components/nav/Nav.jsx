import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {FaUserAlt} from 'react-icons/fa'
import {FaThList} from 'react-icons/fa'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiFillHome/></a>
      <a href="#contact"><IoMdContact/></a>
      <a href="#about"><FaUserAlt/></a>
      <a href="#experience"><FaThList/></a>
    </nav>
  )
}

export default Nav