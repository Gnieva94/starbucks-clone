import '../assets/css/Hero.css'
import banner from '../assets/imgs/banner_hero_2024.jpg'

export const Hero = () => {
  return (
    <section className='hero_main'>
      <img src={banner} alt="Volcán de chocolate Frappuccino y Latte" />
      <div className='hero_container-text'>
        <h1 className='container-text-title'>¡UN MOMENTO PARA BRILLAR!</h1>
        <p className='container-text-paragraph'>Este verano la explosión de sabor vuelve con el Volcán de Chocolate en su versión Frappuccino y Latte</p>
      </div>
    </section>
  )
}
