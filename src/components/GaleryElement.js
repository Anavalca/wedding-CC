export const GaleryElement = ({ element }) => {
  const { img, title } = element;

  return (
    <img src={img} alt={title} />
  );
}
