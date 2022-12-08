import axios from "axios";
const { useState } = require("react");
const Results = require("../results/results");

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();

  const buscar = async () => {
    const resultado = await axios
      .get(
        `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${search}`
      )
      .then((json) => json.data)
      .then((f) => {
        console.log(f.Response.Cadena);
        return f.Response.Cadena;
      })
      .catch((error) => alert("Error al traer los productos"));
    console.log("traduccion", resultado);
    return resultado;
  };

  const busqueda = async (e) => {
    e.preventDefault();

    const resultados = await axios
      .get(
        `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${search}&NumeroPagina=1&Traduccion=${buscar()}`
      )
      .then((json) => json.data)
      .then((f) => {
        console.log(
          `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${search}&NumeroPagina=1&Traduccion=${buscar()}`
        );
        return f.Response[0].Articulos;
      })
      .catch((error) => alert("Error al traer los productos"));
    console.log("resultados ", resultados);
    setResult(resultados);
    return resultados;
  };

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <input
        placeholder="Ingrese el nombre del producto"
        type="text"
        value={search}
        onChange={searchHandler}
      />
      <button onClick={busqueda}>Buscar</button>

      {result ? (
        <div>
          <Results articulos={result} />
        </div>
      ) : (
        <div>Esperando...</div>
      )}
    </div>
  );
};

export default SearchBar;
