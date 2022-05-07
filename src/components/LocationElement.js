import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock, faChurch, faCalendarDay, faBus, faUtensils, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'

export const LocationElement = ({ element }) => {
  const { img, title, text1, text2, location, style, align, icon1, icon2, icon3, iconText1, iconText2, iconText3 } = element;

  const iconArray = [faCalendarDay, faClock, faChurch, faBus, faUtensils, faChampagneGlasses]
  return (
    <div className={style} >
      <img src={img} alt={title} />
      <div className={`textContainer ${align}`}>
      <h3 className='infoTitle'>{title}</h3>
      <div className='iconSection'>
        <div className='iconContainer'>
          <FontAwesomeIcon icon={iconArray.find(icon => icon.iconName === icon1)} className='fa-2xl' />
          <p>{iconText1}</p>
        </div>
        <div className='iconContainer'>
          <FontAwesomeIcon icon={iconArray.find(icon => icon.iconName === icon2)} className='fa-2xl' />
          <p>{iconText2}</p>
        </div>
        <div className='iconContainer'>
          <FontAwesomeIcon icon={iconArray.find(icon => icon.iconName === icon3)} className='fa-2xl' />
          <p>{iconText3}</p>
        </div>
      </div>
      <div>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <button>
        <FontAwesomeIcon icon={faLocationDot} className='locationIcon' />
        <span>{location}</span>
      </button>
      </div>
    </div>
  )
}
