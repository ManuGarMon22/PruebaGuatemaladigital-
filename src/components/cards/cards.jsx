const Cards = ({ imagen, descripcion, precio }) => {
  return (
    <div>
      <img src={imagen} alt="imagen" />
      <div>
        <span>
          <strong>Description:</strong> {descripcion}
        </span>
        <br />
        <span>
          <strong>Price:</strong> ${precio}
        </span>
      </div>
    </div>
  );
};

export default Cards;
