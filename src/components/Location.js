import data from '../data/locationData.json'
import { LocationElement } from './LocationElement'

export const Location = () => {

  return (
    <div id='location' className='locationContainer' >
      <h2 className='sectionTitle'>La boda</h2>
      <div className='sectionLine'></div>
      <p className='subtitle'>Para la celebración de este día tan especial nos reuniremos en el complejo <a title='Web Entrehiedra' href='http://entrehiedra.com/' target='_blank' rel='noreferrer noopener'>EntreHiedra</a>. En él se realizará la celebración, el banquete y la fiesta.</p>
      <div className='infoContainer'>
        {data.map(elem =>
          <LocationElement element={elem} key={elem.id} />
        )}
      </div>
    </div>
  );
}

