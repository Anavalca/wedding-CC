export const MapInfoItem = ({ element }) => {
  const { title, location, phone, map } = element;

  return (
    <div className="mapText" >
      <h4>{title}</h4>
      <span>{location}</span>
      <span>{phone}</span>
      <a href={map}  className="link" alt='Mandar email' title='Mandar correo' target='_blank' rel='noreferrer'>Cómo llegar</a>
    </div>
  )
}
