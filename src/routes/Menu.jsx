import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Categoria } from '../containers/Categoria'
import { useParams } from 'react-router-dom'

export const Menu = () => {
  const param = useParams()

  const hayParam = param.principal && param.category
  const [menu, setMenu] = useState([])
  const getCategorias = async () => {
    try {
      const response = await fetch("/data/menu.json")
      const data = await response.json()
      setMenu(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getCategorias()
  }, [])
  const listaFiltrada = () => {
    for(let item of menu){
      if(item.paramMenu == param.principal){
        // for(let i of item.category){
        //   if(i.param == param.category){
        //     return i.subcategory
        //   }
        // }
        console.log(item)
        return item;
      }
    }
  }
  let lista = hayParam ? listaFiltrada() : []
  console.log(lista)
  return (
    <main>
      <div>
        {
          hayParam 
          ? 
          <>
            <span><Link to={'/menu'}>Menú</Link> / {param.category}</span>
            <h2>{param.category}</h2> 
          </>
          : 
          <>
            <h3>¡Disfrútalos!</h3>
            <h2>Conoce nuestras bebidas y alimentos de temporada</h2>
          </>
        }
      </div>
      <section>
        {
          hayParam 
          ? 
          <>
            {
              lista.map((item, index) => (
                <Categoria key={index} {...item} />
              ))
            }
          </>
          :
          <>
            {menu.map((item, index) => (
              <Categoria key={index} {...item} />
            ))}
          </>
        }
        {/* titulo, array con categorias */}
      </section>
    </main>
  )
}
