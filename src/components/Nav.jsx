
export const Nav = () => {
  return (
    <nav className={`header_nav ${showMenu ? 'on' : 'off'}`}>
        <ul>
          <li>MENÚ</li>
          <li>CAFÉ</li>
          <li>EXPERIENCIA STARBUCKS</li>
        </ul>
        <div>
          <img src={stores} alt="Imagen de localizador" />
          <a href="https://www.starbucks.com.ar/stores">Localizar Tienda</a>
        </div>
      </nav>
  )
}
