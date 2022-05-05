export const LocationElement = ({ element }) => {
  const { img, title, text1, text2 } = element;
  
  return (
    <div className='info' >
      <img src={img} alt={title} />
      <h3 className='infoTitle'>{title}</h3>
      <div className='line'></div>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
}
