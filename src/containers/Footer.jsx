import '../assets/css/Footer.css'
import { Acordion } from './Acordion'
import footerImg from '../assets/imgs/footer-argentina.jpg'
const data = [
  {
    title: 'Sobre nosotros',
    list: ['Nuestra historia', 'Nuestra misión', 'Nuestra cultura inclusiva y valores', 'Nuestro café', 'Historias y novedades', 'Trabajá con nosotros', 'Comunicados oficiales']
  },
  {
    title: 'Impacto social',
    list:['Planeta', 'Personas']
  },
  {
    title: 'Atención al cliente',
    list:['Contacto', 'Medios de pago', 'Defensa de las y los consumidores']
  },
  {
    title: 'Experiencia Starbucks',
    list:['Formas de comprar', 'Devilery']
  }
]
export const Footer = () => {
  return (
    <footer>
      <div className='region-norte'>
        <div className='lista-acordion'>
          {data.map((item, index)=>(
            <Acordion key = {index} title = {item.title} list = {item.list}/>
          ))}
        </div>
        <a href="#" target='_blank'>
          <img className='footer-qrimg' src={footerImg} alt="Imagen qr data fiscal" />
        </a>
      </div>
      <div className='region-sur'>
        <ul className='footer-socialMediaList'>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
        <ul className='footer-miscList'>
          <li>Accesibilidad web</li>
          <li>Aviso de privacidad</li>
          <li>Condiciones de uso</li>
          <li>Mapa del sitio</li>
        </ul>
        <p className='footer-copy'>Ⓒ 2024. Starbucks Cofee Company. Reversados todos los derechos.</p>
        <p className='footer-creado'>Clon realizado por @gnievassj</p>
      </div>
    </footer>
  )
}
