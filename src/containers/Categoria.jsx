import { useState, useEffect } from "react"
import { ItemCategoria } from "../components/ItemCategoria"

//!hayParam => title,paramMenu,category
//hayParam => subcategory
export const Categoria = ({ title, paramMenu, param, category, products, hayParam }) => {
  const [categorias, setCategorias] = useState([])
  const [prod, setProd] = useState([])
  
  useEffect(() => {
    if(hayParam){
      setProd(products)
    }else{
      setCategorias(category)
    }
  }, [hayParam])
  return (
    <article>
      <h3>{title}</h3>
      <ul>
        {/*Category=> title, param, img, subcategory 
          products => title, imgsrc,imgalt,description*/}
        {
          hayParam
          ? <>
              {
                prod.map((item, index) => (
                  <ItemCategoria key={index} hayParam={hayParam}  paramMenu={paramMenu} param={param} {...item} />
                ))
              }
            </>
          : 
            <>
              {
                categorias.map((item, index) => (
                  <ItemCategoria key={index} hayParam={hayParam}  paramMenu={paramMenu} param={param} {...item} />
                ))
              }
              </>
          
        }
      </ul>
    </article>
  )
}
