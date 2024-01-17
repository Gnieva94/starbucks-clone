import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Contexto from '../context/Contexto'
import '../assets/css/Menu/menu.css'

export const Categoria = () => {
  const { subcategory, getSubcategory } = useContext(Contexto)
  //console.log(filtered.subcategory)
  const param = useParams()
  useEffect(() => {
    getSubcategory(param)
  }, [])

  return (
    <main className='menu-main'>
      <section className='menu-section'>
        <div className='menu-headings'>
          <span className='menu-heading-span'><Link to={'/menu'}>Menú /</Link> {subcategory.title}</span>
          <h2>{subcategory.title}</h2>
        </div>
        {
          (subcategory && subcategory.subcategory) && 
          subcategory.subcategory.map((subcat)=>(
            <article className='menu-article' key={subcat.id}>
              <h3 className='menu-article-heading'>{subcat.title}</h3>
              <ul className='menu-article-ul'>
              {subcat.products.map((prod)=>(
                <li className='menu-article-ul-li' key={prod.id}>
                <Link className='menu-article-link' to={`/producto/${prod.id}`}>
                  <div className='img-circle'>
                    <img className='menu-article-img' src={prod.imgSrc} alt={prod.imgAlt} />
                  </div>
                  <h4 className='menu-article-name'>{prod.name}</h4>
                </Link>
              </li>
              ))}
              </ul>
            </article>
          ))
        }
      </section>
    </main>
  )
}
