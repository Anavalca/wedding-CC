import galeryData from '../data/galeryData.json';
import { GaleryElement } from './GaleryElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Carousel = () => {

  

  const scrollRight = (e) => {
    const imgList = document.querySelector('.imgList');
    const screenWidth = window.innerWidth
    if (screenWidth < 800){
      imgList.scrollBy(310, 0);
    } else {
      imgList.scrollBy(750, 0);
    }
  }

  const scrollLeft = (e) => {
    const imgList = document.querySelector('.imgList');
    const screenWidth = window.innerWidth
    if (screenWidth < 800){
      imgList.scrollBy(-310, 0);
    } else {
      imgList.scrollBy(-750, 0);
    }
  }

  return (
    <section className="carouselContainer">
        <FontAwesomeIcon className="scroll-arrow fa-lg" id="scroll-left" onClick={scrollLeft} icon={faChevronLeft} />
      <ul className="imgList">
        {galeryData.map(elem =>
        <li className='imgContainer' key={elem.id}>
          <GaleryElement element={elem} key={elem.id} />
        </li>
      )}
      </ul>
      <FontAwesomeIcon  className="scroll-arrow fa-lg" id="scroll-right" onClick={scrollRight} icon={faChevronRight} />
    </section>
  )
}