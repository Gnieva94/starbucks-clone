import '../assets/css/Experiencia/ExperienciaSection.css'

export const ExperienciaSection = ({img,title,description,btn}) => {
  return (
    <article className='exp-article'>
      {img.src && <img src={img.src} alt={img.alt}/>}
      <div className='exp-article-info'>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        {btn.href && <a href={btn.href}>{btn.text}</a>}
      </div>
    </article>
  )
}
