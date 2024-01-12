import { useState } from 'react'
import '../assets/css/Header.css'
import { MenuPopUp } from './MenuPopUp.jsx'
import logo from '../assets/imgs/logo.svg'
import menu from '../assets/imgs/menu.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const openMenu = () => {
    setShowMenu(true)
  }
  const closeMenu = () => {
    setShowMenu(false)
  }
  return (
    <header className='header'>
      <Link className='header_logo' to={'/'}>
        <img src={logo} alt="Logo de StarBucks" />
      </Link>
      <button className='header_btn' type='button' onClick={openMenu}>
        <img src={menu} alt="Imagen menú" />
      </button>
      {showMenu && <MenuPopUp closeMenu = {closeMenu} />}
    </header>
  )
}
