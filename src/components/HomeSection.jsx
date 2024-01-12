import '../assets/css/HomeSection.css'

export const HomeSection = ({title,paragraph,btnTitle,isBtn,img,imgAlt}) => {
  return (
    <section className='hero_main'>
      <img src={img} alt={imgAlt} />
      <div className='hero_container-text'>
        <h1 className='container-text-title'>{title}</h1>
        <p className='container-text-paragraph'>{paragraph}</p>
        {isBtn && <button className='container-text-btn' type='button'>{btnTitle}</button> }
      </div>
    </section>
  )
}
