import { useState, useEffect } from "react"
import { CafeSection } from "../components/CafeSection"
import '../assets/css/Cafe/Cafe.css'

export const Cafe = () => {
  const [section , setSection] = useState([]);
  const getSection = async () => {
    try{
      const res = await fetch('./data/cafe-section.json');
      const data = await res.json();
      setSection(data);
      console.log(data);
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
      <h1 className="cafe-title">Nuestro café</h1>
      <section className="cafe-section">
        {section.map((item,index) => (
          <CafeSection key={index} {...item}/>
        ))}
      </section>
    </main>
  )
}
