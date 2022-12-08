const Cards = (imagen, nombre, descripcion, precio) => {
  return (
    <div>
      <img src={imagen} alt="imagen" />

      <div>
        <span> Descripcion: {descripcion}</span>
        <span> Precio: ${precio}</span>
      </div>
    </div>
  );
};

export default Cards;
