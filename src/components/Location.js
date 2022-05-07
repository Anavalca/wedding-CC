import data from '../data/locationData.json'
import { LocationElement } from './LocationElement'

export const Location = () => {

  return (
    <div id='location' className='locationContainer' >
      <div className='infoContainer'>
        {data.map(elem =>
          <LocationElement element={elem} key={elem.id} />
        )}
      </div>
    </div>
  );
}

