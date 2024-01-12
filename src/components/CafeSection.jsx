import '../assets/css/Cafe/CafeSection.css'

export const CafeSection = ({subtitle,parag,img,btn}) => {
  console.log(btn)
  //console.log(parag)
  return (
    <article className='cafe-article'>
      {subtitle && <h2>{subtitle}</h2>}
      {parag[0] && <p>{parag[0]}</p>}
      {img.src && <img src={img.src} alt={img.alt}/>}
      {parag[1] && <p>{parag[1]}</p>}
      {parag[2] && <p>{parag[2]}</p>}
      {btn.link && <a href={btn.link}>{btn.text}</a>}
    </article>
  )
}
