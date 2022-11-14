import { Route, Routes } from "react-router-dom";
import { Main } from "./pages";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./pages/Cart";
import { FavouritePage } from "./pages/FavouritePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main /> } />
      <Route path="/product" element={ <ProductPage /> } />
      <Route path="/cart" element={ <Cart /> } />
      <Route path="/favourite" element={ <FavouritePage /> } />
    </Routes>
  )
}

export default App;
