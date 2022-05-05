export const GaleryElement = ({ element }) => {
  const { img, title } = element;

  return (
    <div className='imgContainer animation'>
      <a href={img}>
        <img src={img} alt={title} />
      </a>
    </div>
  );
}
