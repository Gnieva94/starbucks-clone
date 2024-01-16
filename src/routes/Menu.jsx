import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Categoria } from '../containers/Categoria'
import { useParams } from 'react-router-dom'

export const Menu = () => {
  const [menu, setMenu] = useState([])
  const [menuFiltrado, setMenuFiltrado] = useState([])
  console.log("Menu")
  const param = useParams()
  console.log(param.principal)
  console.log(param.category)
  //const [hayParam, setHayParam] = useState(false)
  const getCategorias = async () => {
    try {
      const response = await fetch("/data/menu.json")
      const data = await response.json()
      setMenu(data)
      console.log("getCategorias")
    } catch (error) {
      console.log(error)
    }
  }
  const listaFiltrada = () => {
    for(let item of menu){
      if(item.paramMenu == param.principal){
        for(let i of item.category){
          if(i.param == param.category)
            setMenuFiltrado(i.subcategory)
        }
      }
    }
  }
  let hayParam = false;
  if(param.principal != null && param.category != null){
    //setHayParam(true)
    console.log("hay param")
    hayParam = true
    
  }else{
    console.log("no hay param")
  }
  useEffect(() => {
    if(menu.length == 0){
      getCategorias()
    }
    if(hayParam){
      console.log("hay param useefect")
      listaFiltrada()
    }
  }, [])
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
              /*subcategory */
              menuFiltrado.map((item, index) => (
                <Categoria key={index} paramMenu={param.principal} param={param.category} hayParam={hayParam} {...item} />
              ))
            }
          </>
          :
          <>
            {
              /* category */
              menu.map((item, index) => (
                <Categoria key={index} {...item} />
              ))
            }
          </>
        }
        {}
      </section>
    </main>
  )
}
