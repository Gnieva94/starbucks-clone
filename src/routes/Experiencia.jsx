import { useState, useEffect } from "react"
import { ExperienciaSection } from "../components/ExperienciaSection"
import '../assets/css/Experiencia/Experiencia.css'

export const Experiencia = () => {
  const [section , setSection] = useState([]);
  const getSection = async () => {
    try{
      const res = await fetch('/data/exp-section.json');
      const data = await res.json();
      setSection(data);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getSection();
  },[]);
  return (
    <main>
      <h1 className="exp-title">Experiencia Starbucks</h1>
      <section className="exp-section">
        <h2 className="exp-subtitle">Para cada momento hay una forma de vivir la Experiencia Starbucks como vos quieras.</h2>
        {section.map((item,index)=>(
          <ExperienciaSection key={index} {...item}/>
        ))}
      </section>
    </main>
  )
}
