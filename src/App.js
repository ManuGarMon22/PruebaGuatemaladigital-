import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
import Results from "./components/results/results";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <SearchBar bus={state} setBus={setState} />
    </div>
  );
}

export default App;
