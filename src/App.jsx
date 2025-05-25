import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Routers";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
