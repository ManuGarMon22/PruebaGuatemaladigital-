import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
import Results from "./components/results/results";
import { useSelector } from "react-redux";

function App() {
  const articulos = useSelector((state) => state);

  return (
    <div className="App">
      <SearchBar />
      {articulos.Articulos ? <Results /> : <div></div>}
    </div>
  );
}

export default App;
