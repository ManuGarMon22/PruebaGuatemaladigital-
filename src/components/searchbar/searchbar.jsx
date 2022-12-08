import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

const { useState } = require("react");
const Results = require("../results/results");

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function busqueda(e) {
    e.preventDefault();
    console.log("si funciona el boton. Busca", search);
    dispatch(actions.busqueda(search));
  }

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
    </div>
  );
};

export default SearchBar;
