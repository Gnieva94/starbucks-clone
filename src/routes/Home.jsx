import { useState , useEffect } from 'react'
import { HomeSection } from '../components/HomeSection.jsx'

export const Home = () => {
  const [section , setSection] = useState([]);
  const getSection = async () => {
    try{
      const res = await fetch('./data/home-section.json');
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
      {section.map((item,index) => (
        <HomeSection
          key={index}
          title={item.title}
          paragraph={item.paragraph}
          btnTitle={item.btnTitle}
          btnHref={item.btnHref}
          img={item.img}
          imgAlt={item.imgAlt}
        />
      ))}
    </main>
  )
}
