import { Link } from "react-router-dom"

/*  Category=> title, param, img, subcategory 
    products => title, imgsrc,imgalt,description */
export const ItemCategoria = ({title, param, img, hayParam, paramMenu, name, imgSrc,imgAlt,Description }) => {
  //console.log(`${paramMenu}/${param}`)
  return (
    <li>
      {
        hayParam 
        ? <><Link to={`./producto/`}>
            <img src={imgSrc} alt={imgAlt} />
            <h4>{name}</h4>
          </Link></>
        : <><Link to={`./${paramMenu}/${param}`}>
            <img src={img} alt={title} />
            <h4>{title}</h4>
          </Link></>
      }
    </li>
  )
}
