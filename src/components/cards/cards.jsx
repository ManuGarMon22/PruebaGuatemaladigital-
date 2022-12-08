const Cards = ({ imagen, descripcion, precio }) => {
  return (
    <div>
      <img src={imagen} alt="imagen" />
      <div>
        <span> Description: {descripcion}</span>
        <span> Price: ${precio}</span>
      </div>
    </div>
  );
};

export default Cards;
