import { useState } from "react"
import { ItemCategoria } from "../components/ItemCategoria"

export const Categoria = ({title, paramMenu, category}) => {
  const [categorias, setCategorias] = useState(category)
  return (
    <article>
      <h3>{title}</h3>
      <ul>
        {/* title, img, subcategory */}
        {categorias.map((item, index) => (
          <ItemCategoria key={index} paramMenu={paramMenu} {...item} />
        ))}
      </ul>
    </article>
  )
}
