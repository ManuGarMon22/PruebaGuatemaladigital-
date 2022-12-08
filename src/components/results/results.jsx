import { useSelector } from "react-redux";
import Cards from "../cards/cards.jsx";

const Results = () => {
  const articulos = useSelector((state) => state.Articulos);
  const resultados = useSelector((state) => state.Resultado);

  return articulos ? (
    <div>
      {resultados >= 1 ? (
        <div>
          <h2>Resultados</h2>
          <div>
            {articulos.map((e) => {
              return (
                <Cards
                  imagen={e.Foto}
                  descripcion={e.Descripcion}
                  precio={e.Precio}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>No se encontraron resultados</h2>
      )}
    </div>
  ) : (
    <h2>CARGANDO...</h2>
  );
};

export default Results;
