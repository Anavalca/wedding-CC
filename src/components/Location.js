import data from '../data/locationData.json'
import mapsItems from '../data/mapItems.json'
import { LocationElement } from './LocationElement'
import { MapInfoItem } from './MapInfoItem'
import map from '../images/Mapa-Cris-y-Curro.png'
export const Location = () => {

  return (
    <div id='location' className='locationContainer' >
      <div className='infoContainer'>
        {data.map(elem =>
          <LocationElement element={elem} key={elem.id} />
        )}
      </div>
      <div className='map'>
        <img src={map} alt='mapa' />
        <div className='mapInfoContainer'>
          {mapsItems.map(elem =>
            <MapInfoItem element={elem} key={elem.id} />
          )}
        </div>
      </div>
    </div>
  );
}

