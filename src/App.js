import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./Components/Favorites";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { RecipesProvider } from "./Contexts/RecipeContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RecipesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </RecipesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
