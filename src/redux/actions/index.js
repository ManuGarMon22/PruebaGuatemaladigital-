import axios from "axios";

export const BUSCAR = "BUSCAR";

const buscar = async (search) => {
  console.log("entro al metodo buscar");

  const resultado = await axios
    .get(
      `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${search}`
    )
    .then((json) => json.data)
    .then((f) => {
      return f.Response.Cadena;
    })
    .catch((error) => alert("Error al traer los productos"));
  return resultado;
};

export const busqueda = (search) => {
  return async (dispatch) => {
    const traduccion = await buscar(search);
    const resultados = await axios
      .get(
        `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${search}&NumeroPagina=1&Traduccion=${traduccion}`
      )
      .then((json) => json.data)
      .then((f) => {
        return dispatch({ type: BUSCAR, payload: f.Response[0] });
      })
      .catch((error) => alert("Error al traer los productos"));
    return resultados;
  };
};
