import { useEffect, useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Contexto from '../context/Contexto'
import '../assets/css/ProductDetail.css'

export const ProductDetail = () => {
  const { product, getProduct } = useContext(Contexto)
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getProduct(params)
  }, [])
  return (
    <main>
      <section className='product-section'>
        <div className='product-heading'>
          <img className='product-img' src={product.imgSrc} alt={product.imgAlt} />
          <h3 className='product-name'>{product.name}</h3>
        </div>
        <div className='product-body'>
          <p className='product-desc'>{product.description}</p>
        </div>
        <button type='button' className='btnVolver' onClick={() => navigate(-1)}>Volver</button>
      </section>
    </main>
  )
}
