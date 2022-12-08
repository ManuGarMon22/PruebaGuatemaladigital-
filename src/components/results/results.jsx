import { useDispatch, useSelector } from "react-redux";
import Cards from "../cards/cards";

const Results = (articulos) => {
  
  return (
    <div>
      {}
      {articulos.length > 0 ? (
        <div>
          {articulos.map((e) => {
            <Cards
              imagen={e.Foto}
              descripcion={e.Descripcion}
              precio={e.Precio}
            />;
          })}
          resultados
        </div>
      ) : (
        <div>No se encontraron resultados</div>
      )}
    </div>
  );
};

export default {
  Results,
};
