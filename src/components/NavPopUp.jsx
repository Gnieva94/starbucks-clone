import { Link } from 'react-router-dom'
import '../assets/css/Nav.css'
import stores from '../assets/imgs/stores.svg'

export const NavPopUp = ({ closeMenu }) => {
  const handleBtnMenu = () => {
    closeMenu()
  }
  return (
    <div className='nav_popup'>
      <ul className='nav_popup-ul'>
          <li className='nav_popup-li'><Link onClick={handleBtnMenu} to='/menu'>MENÚ</Link></li>
          <li className='nav_popup-li'><Link onClick={handleBtnMenu} to='/cafe'>CAFÉ</Link></li>
          <li className='nav_popup-li'><Link onClick={handleBtnMenu} to='/experiencia'>EXPERIENCIA STARBUCKS</Link></li>
        </ul>
        <div className='nav_popup-locator'>
          <img src={stores} alt="Imagen de localizador" />
          <a href="https://www.starbucks.com.ar/stores">Localizar Tienda</a>
        </div>
    </div>
  )
}
