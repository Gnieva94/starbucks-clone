import '../assets/css/Footer.css'
import { useState, useEffect } from 'react'
import { Acordion } from './Acordion'
import footerImg from '../assets/imgs/footer-argentina.jpg'

export const Footer = () => {
  const [footer, setFooter] = useState([])
  const getFooter = async () => {
    try {
      const res = await fetch('./data/footer.json')
      const data = await res.json()
      setFooter(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getFooter()
  }, [])
  return (
    <footer>
      <div className='region-norte'>
        <div className='lista-acordion'>
          {footer.map((item, index)=>(
            <Acordion key = {index} title = {item.title} list = {item.list}/>
          ))}
        </div>
        <a href="http://qr.afip.gob.ar/?qr=mXre0uzPRZp2FyKAW3LfRQ,," target='_blank'>
          <img className='footer-qrimg' src={footerImg} alt="Imagen qr data fiscal" />
        </a>
      </div>
      <div className='region-sur'>
        <ul className='footer-socialMediaList'>
          <li><a className='social-network facebook-icon' href="https://www.facebook.com/StarbucksArgentina" target='_blank'>Facebook</a></li>
          <li><a className='social-network instagram-icon' href="https://www.instagram.com/starbucksargentina" target='_blank'>Instagram</a></li>
          <li><a className='social-network linkedin-icon' href="https://www.linkedin.com/company/starbucks-coffee-argentina/" target='_blank'>LinkedIn</a></li>
        </ul>
        <ul className='footer-miscList'>
          <li><a href="https://www.starbucks.com.ar/articulo/accesibilidad-web" target='_blank'>Accesibilidad web</a></li>
          <li><a href="https://www.starbucks.com.ar/articulo/declaracion-privacidad" target='_blank'>Aviso de privacidad</a></li>
          <li><a href="https://www.starbucks.com.ar/articulo/condiciones-de-uso" target='_blank'>Condiciones de uso</a></li>
          <li><a href="https://www.starbucks.com.ar/articulo/mapa-del-sitio" target='_blank'>Mapa del sitio</a></li>
        </ul>
        <p className='footer-copy'>Ⓒ 2024. Starbucks Cofee Company. Reversados todos los derechos.</p>
        <p className='footer-creado'>Clon realizado por @gnievassj</p>
      </div>
    </footer>
  )
}
