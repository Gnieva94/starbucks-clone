import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Contexto from '../context/Contexto'
import '../assets/css/Menu/menu.css'

export const Menu = () => {
  const { menu, getMenu } = useContext(Contexto)
  useEffect(() => {
    getMenu()
  }, [])
  return (
    <main className='menu-main'>
      <section className='menu-section'>
        <div className='menu-headings'>
          <h3>¡Disfrútalos!</h3>
          <h2>Conoce nuestras bebidas y alimentos de temporada</h2>
        </div>
        {menu &&
          menu.map((item) => (
            <article className='menu-article' key={item.id}>
              <h3 className='menu-article-heading'>{item.title}</h3>
              <ul className='menu-article-ul'>
                {
                  item.category.map((cat) => (
                    <li className='menu-article-ul-li' key={cat.id}>
                      <Link className='menu-article-link' to={`./${item.paramMenu}/${cat.param}`}>
                        <div className='img-circle'>
                        <img className='menu-article-img' src={cat.img} alt={cat.title} />

                        </div>
                        <h4 className='menu-article-name'>{cat.title}</h4>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </article>
          ))
        }
      </section>
    </main>
  )
}
