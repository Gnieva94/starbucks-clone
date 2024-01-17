import { useEffect, useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Contexto from '../context/Contexto'

export const ProductDetail = () => {
  const { product, getProduct } = useContext(Contexto)
  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    getProduct(params)
  }, [])
  return (
    <main>
      <section>
        <div>
          <img src={product.imgSrc} alt={product.imgAlt} />
          <h3>{product.name}</h3>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
        <button onClick={() => navigate(-1)}>Volver</button>
      </section>
    </main>
  )
}
