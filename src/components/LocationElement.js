import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faClock, faChurch, faCalendarDay, faBus, faUtensils, faChampagneGlasses, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Modal from 'react-modal';
import { Map } from './Map';

export const LocationElement = ({ element }) => {
  const { img, title, text1, text2, location, style, align, icon1, icon2, icon3, iconText1, iconText2, iconText3,
    mapCoordenateA, mapCoordenateB, zoom, mapTitle, mapDescription, url, bus } = element;
  const iconArray = [faCalendarDay, faClock, faChurch, faBus, faUtensils, faChampagneGlasses]

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

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
          <p>{text2}{bus && (
            <><a href="https://forms.gle/76PwG1tvC2q7qFa7A" className='link' alt='Reservar autobús' target='_blank' rel='noreferrer noopener' > ¡Reserva tu plaza aquí!</a><span> Si preferís ir en coche, hay parking gratuito</span>
            </>
          )}</p>
        </div>
        <button onClick={toggleModal} className='link'>
          <FontAwesomeIcon icon={faLocationDot} className='locationIcon' />
          <span>{location}</span>
        </button>
        {/* POP UP */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel={title}
          ariaHideApp={false}
        >
          <Map
            mapCoordenateA={mapCoordenateA}
            mapCoordenateB={mapCoordenateB}
            zoom={zoom}
            mapTitle={mapTitle}
            mapDescription={mapDescription}
            url={url} />
          <button className="popUpInfoContainer" onClick={toggleModal}>
            <FontAwesomeIcon icon={faXmark} className='fa-l' />
          </button>
        </Modal>
      </div>
    </div>
  )
}
