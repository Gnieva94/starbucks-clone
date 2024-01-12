import '../assets/css/AcordionList.css'

export const AcordionList = ({list}) => {
  console.log(list)
  return (
    <ul className='acordionList-ul'>
      {list.map((item,index) => (
        <li className='acordionList-li' key={index}>
          <a href={item.link} target='_blank'>{item.name}</a>
        </li>
      ))}
    </ul>
  )
}
