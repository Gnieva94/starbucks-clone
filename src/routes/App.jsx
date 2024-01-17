import '../assets/css/App.css'
import { UsarContexto } from '../context/UsarContexto.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Header } from '../containers/Header.jsx'
import { Home } from './Home.jsx'
import { Menu } from './Menu.jsx'
import { Categoria } from '../containers/Categoria.jsx'
import { ProductDetail } from '../containers/ProductDetail.jsx'
import { Cafe } from './Cafe.jsx'
import { Experiencia } from './Experiencia.jsx'
import { Footer } from '../containers/Footer.jsx'

export const App = () => {
  
  return (
    <>
      <UsarContexto>
        <Header />
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menu/:category/:subcategory' element={<Categoria />} />
            <Route path='/cafe' element={<Cafe />} />
            <Route path='/experiencia' element={<Experiencia />} />
            <Route path='/producto/:id' element={<ProductDetail/>}/>
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        <Footer />
      </UsarContexto>
    </>
  )
}

