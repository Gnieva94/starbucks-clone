import { useState } from "react"
import { AcordionList } from "../components/AcordionList"
import '../assets/css/Acordion.css'


export const Acordion = ({title,list}) => {
  const [active, setActive] = useState(false)
  const handleClick = () => { 
    setActive(!active) 
  }
  return (
    <div>
      <h3 
        className="acordion-title" 
        onClick={handleClick} 
      >
        {title}
      </h3>
      {active && 
        <AcordionList list={list}/>
      }
    </div>
  )
}

