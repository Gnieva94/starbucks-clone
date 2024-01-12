import '../assets/css/App.css'
import { Header } from './Header.jsx'
import { HomeSection } from '../components/HomeSection.jsx'
import { Footer } from './Footer.jsx'

export const App = () => {
  const section = [
    {
      title: '¡UN MOMENTO PARA BRILLAR!',
      paragraph: 'Este verano la explosión de sabor vuelve con el Volcán de Chocolate en su versión Frappuccino y Latte',
      btnTitle: '',
      isBtn: false,
      img: './imgs/section_1.jpg',
      imgAlt: 'Volcán de chocolate Frappuccino y Latte'
    },
    {
      title: 'Unite a algo más grande',
      paragraph: 'Revisa las oportunidades que tenemos para vos',
      btnTitle: 'Postular acá',
      isBtn: true,
      img: './imgs/section_2.png',
      imgAlt: 'Pechera verde y vaso Starbucks'
    }
  ]
  return (
    <>
      <Header />
      {section.map((item,index) => (
        <HomeSection
          key={index}
          title={item.title}
          paragraph={item.paragraph}
          btnTitle={item.btnTitle}
          isBtn={item.isBtn}
          img={item.img}
          imgAlt={item.imgAlt}
        />
      ))}
      <Footer />
    </>
  )
}

