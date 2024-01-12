import '../assets/css/Footer.css'
import { Acordion } from './Acordion'
import footerImg from '../assets/imgs/footer-argentina.jpg'
const data = [
  {
    title: 'Sobre nosotros',
    list: [
      {
        name:'Nuestra historia',
        link:'https://www.starbucks.com.ar/seccion/nuestra-historia'
      }, 
      {
        name:'Nuestra misión',
        link:'https://www.starbucks.com.ar/articulo/nuestra-mision'
      }, 
      {
        name:'Nuestra cultura inclusiva y valores',
        link:'https://www.starbucks.com.ar/articulo/nuestra-cultura-inclusiva-y-valores'
      }, 
      {
        name:'Nuestro café',
        link:'https://www.starbucks.com.ar/articulo/lets-talk-coffee'
      },
      {
        name:'Historias y novedades',
        link:'https://historias.starbucks.com/es/'
      }, 
      {
        name:'Trabajá con nosotros',
        link:'https://app.genoma.work/jobs/sbx-ar'
      }, 
      {
        name:'Comunicados oficiales',
        link:'https://www.starbucks.com.ar/seccion/comunicados-oficiales'
      }
    ]
  },
  {
    title: 'Impacto social',
    list:[
      {
        name:'Planeta',
        link:'https://www.starbucks.com.ar/seccion/planeta'
      }, 
      {
        name:'Personas',
        link:'https://www.starbucks.com.ar/articulo/personas'
      }
    ]
  },
  {
    title: 'Atención al cliente',
    list:[
      {
        name:'Contacto',
        link:'https://www.starbucks.com.ar/articulo/contacto'
      }, 
      {
        name:'Medios de pago',
        link:'https://www.starbucks.com.ar/articulo/medios-de-pago'
      }, 
      {
        name:'Defensa de las y los consumidores',
        link:'https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario'
      }
    ]
  },
  {
    title: 'Experiencia Starbucks',
    list:[
      {
        name:'Formas de comprar',
        link:'https://www.starbucks.com.ar/seccion/experiencia-starbucks'
      }, 
      {
        name:'Devilery',
        link:'https://www.pedidosya.com.ar/cadenas/starbucks'
      }
    ]
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
