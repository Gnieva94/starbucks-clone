import '../assets/css/App.css'
import { Header } from './Header.jsx'
import { Home } from '../routes/Home.jsx'
import { Menu } from '../routes/Menu.jsx'
import { Cafe } from '../routes/Cafe.jsx'
import { Experiencia } from '../routes/Experiencia.jsx'
import { Footer } from './Footer.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'

export const App = () => {
  
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cafe' element={<Cafe />} />
        <Route path='/experiencia' element={<Experiencia />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </>
  )
}

