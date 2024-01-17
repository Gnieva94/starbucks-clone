import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Contexto from '../context/Contexto'

export const Categoria = () => {
  const { subcategory, getSubcategory } = useContext(Contexto)
  //console.log(filtered.subcategory)
  const param = useParams()
  useEffect(() => {
    getSubcategory(param)
  }, [])

  return (
    <main>
      <div>
        <span><Link to={'/menu'}>Menú</Link> / {subcategory.title}</span>
        <h2>{subcategory.title}</h2>
      </div>
      <section>
        {
          (subcategory && subcategory.subcategory) && 
          subcategory.subcategory.map((subcat)=>(
            <article key={subcat.id}>
              <h3>{subcat.title}</h3>
              {subcat.products.map((prod)=>(
                <li key={prod.id}>
                <Link to={`/producto/${prod.id}`}>
                  <img src={prod.imgSrc} alt={prod.imgAlt} />
                  <h4>{prod.name}</h4>
                </Link>
              </li>
              ))}
            </article>
          ))
        }
      </section>
    </main>
  )
}
