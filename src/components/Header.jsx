import '../assets/css/Header.css'
import logo from '../assets/imgs/logo.svg'
import stores from '../assets/imgs/stores.svg'

export const Header = () => {
  return (
    <header>
        <a href="/">
            <img src={logo} alt="Logo de StarBucks" />
            </a>
        <nav>
            <ul>
                <li>MENÚ</li>
                <li>CAFÉ</li>
                <li>EXPERIENCIA STARBUCKS</li>
            </ul>
        </nav>
        <div>
            <img src={stores} alt="Imagen de localizador" />
            <a href="https://www.starbucks.com.ar/stores">Localizar Tienda</a>
        </div>
    </header>
  )
}
