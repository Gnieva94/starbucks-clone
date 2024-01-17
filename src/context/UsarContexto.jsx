import Contexto from "./Contexto.js"
import { useReducer } from "react"
import { Reducer } from "./Reducer.js"

export const UsarContexto = ({children}) => {
  const initialState = {
    menu: [],
    subcategory: [],
    product: {}
  }
  const [state, dispatch] = useReducer(Reducer,initialState)
  const getMenu = async () => {
    try {
      const response = await fetch("/data/menu.json")
      const data = await response.json()
      dispatch({type: "GET_MENU", payload: data})
    } catch (error) {
      console.error(error)
    }
  }
  const getSubcategory = async ({category,subcategory})=>{
    const response = await fetch("/data/menu.json")
    const data = await response.json()

    const subCat = data.flatMap(item => item.paramMenu === category ? item.category : [])
    .find(i => i.param === subcategory);

    if (subCat) {
      dispatch({ type: "GET_SUBCATEGORY", payload: subCat });
    } else {
      console.log("Subcategoría no encontrada");
    }
  }
  const getProduct = async ({id})=>{
    const response = await fetch("/data/menu.json")
    const data = await response.json()
    const product = data.flatMap(menu => menu.category.flatMap(cat => cat.subcategory.flatMap(subcat => subcat.products)))
    .find(prod => prod.id === id);

    if (product) {
      dispatch({ type: "GET_PRODUCT", payload: product });
    } else {
      console.log("Producto no encontrado");
    }
  }
  return (
    <Contexto.Provider value={{ 
      menu: state.menu,
      subcategory: state.subcategory,
      product: state.product,
      getMenu,
      getSubcategory,
      getProduct
    }}>
      {children}
    </Contexto.Provider>
  )
}

