import '../assets/css/Header.css'
import { NavPopUp } from '../components/NavPopUp'
import logo from '../assets/imgs/logo.svg'
import close from '../assets/imgs/close.svg'

export const MenuPopUp = ({ closeMenu }) => {
  const handleBtnMenu = () => {
    closeMenu()
  }
  return (
    <div className="popup">
      <div className='header'>
        <a className='header_logo' href="/">
          <img src={logo} alt="Logo de StarBucks" />
        </a>
        <NavPopUp />
        <button className='header_btn' title='open Menu' type='button' onClick={handleBtnMenu}>
          <img src={close} alt="Imagen menú" />
        </button>
      </div>
    </div>
  )
}
