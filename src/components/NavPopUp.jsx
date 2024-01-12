import '../assets/css/Nav.css'
import stores from '../assets/imgs/stores.svg'

export const NavPopUp = () => {
  return (
    <div className='nav_popup'>
      <ul className='nav_popup-ul'>
          <li className='nav_popup-li'>MENÚ</li>
          <li className='nav_popup-li'>CAFÉ</li>
          <li className='nav_popup-li'>EXPERIENCIA STARBUCKS</li>
        </ul>
        <div className='nav_popup-locator'>
          <img src={stores} alt="Imagen de localizador" />
          <a href="https://www.starbucks.com.ar/stores">Localizar Tienda</a>
        </div>
    </div>
  )
}
