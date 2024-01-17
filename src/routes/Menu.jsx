import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Contexto from '../context/Contexto'

export const Menu = () => {
  const { menu, getMenu } = useContext(Contexto)
  useEffect(() => {
    getMenu()
  }, [])
  return (
    <main>
      <div>
        <h3>¡Disfrútalos!</h3>
        <h2>Conoce nuestras bebidas y alimentos de temporada</h2>
      </div>
      <section>
        {menu &&
          menu.map((item) => (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <ul>
                {
                  item.category.map((cat) => (
                    <li key={cat.id}>
                      <Link to={`./${item.paramMenu}/${cat.param}`}>
                        <img src={cat.img} alt={cat.title} />
                        <h4>{cat.title}</h4>
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
