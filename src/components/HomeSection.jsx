import '../assets/css/HomeSection.css'

export const HomeSection = ({title,paragraph,btnTitle,btnHref,img,imgAlt}) => {
  return (
    <section className='hero_main'>
      <img src={img} alt={imgAlt} />
      <div className='hero_container-text'>
        <h1 className='container-text-title'>{title}</h1>
        <p className='container-text-paragraph'>{paragraph}</p>
        {btnTitle && <a className='container-text-btn' href={btnHref}>{btnTitle}</a> }
      </div>
    </section>
  )
}
