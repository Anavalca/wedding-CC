import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Map = (mapProps) => {
  const { mapCoordenateA, mapCoordenateB, mapTitle, mapDescription } = mapProps
  const coordinates = {
    center: [mapCoordenateA, mapCoordenateB],
    zoom: 11,
  }


  return (
    <MapContainer center={coordinates.center} zoom={coordinates.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates.center}>
        <Popup>
          <span className='popupTitle'>{mapTitle}</span>
          <span>{mapDescription}</span>
          <a href='https://www.google.com/maps/place/EntreHiedra/@37.7760158,-3.8902024,15z/data=!4m5!3m4!1s0x0:0xb2ea201b42c3f93c!8m2!3d37.7760158!4d-3.8902024' alt='cómo llegar' target='_blank' rel='noreferrer noopener'>Cómo llegar</a>
        </Popup>
      </Marker>
    </MapContainer>

  );
}

