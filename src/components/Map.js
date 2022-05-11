import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Map = (mapProps) => {
  const { mapCoordenateA, mapCoordenateB, zoom, mapTitle, mapDescription, url } = mapProps
  const coordinates = {
    center: [mapCoordenateA, mapCoordenateB],
    zoom: zoom,
  }


  return (
    <MapContainer center={coordinates.center} zoom={coordinates.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates.center}>
        <Popup>
          <span className='markerTitle'>{mapTitle}</span>
          <span>{mapDescription}</span>
          <a href={url} alt='cómo llegar' target='_blank' rel='noreferrer noopener'>Cómo llegar</a>
        </Popup>
      </Marker>
    </MapContainer>

  );
}

