import '../assets/css/Header.css'
import { NavPopUp } from '../components/NavPopUp'
import logo from '../assets/imgs/logo.svg'
import close from '../assets/imgs/close.svg'
import { Link } from 'react-router-dom'

export const MenuPopUp = ({ closeMenu }) => {
  const handleBtnMenu = () => {
    closeMenu()
  }
  return (
    <div className="popup">
      <div className='header'>
        <Link className='header_logo' to={'/'} onClick={handleBtnMenu}>
          <img src={logo} alt="Logo de StarBucks" />
        </Link >
        <NavPopUp closeMenu = {closeMenu} />
        <button className='header_btn' title='open Menu' type='button' onClick={handleBtnMenu}>
          <img src={close} alt="Imagen menú" />
        </button>
      </div>
    </div>
  )
}
