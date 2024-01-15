import { Link } from "react-router-dom"

export const ItemCategoria = ({paramMenu,title, img, subcategory, param }) => {
  //console.log(`${paramMenu}/${param}`)
  return (
    <li>
      <Link to={`./${paramMenu}/${param}`}>
        <img src={img} alt={title} />
        <h4>{title}</h4>
      </Link>
    </li>
  )
}
