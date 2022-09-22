import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {FaUserAlt} from 'react-icons/fa'
import {FaThList} from 'react-icons/fa'

const Nav = () => {
  return (
   
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><AiFillHome/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact"><IoMdContact/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about"><FaUserAlt/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience"><FaThList/></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav