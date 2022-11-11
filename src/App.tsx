import { useProducts } from "./hooks/products";

import { Product } from "./components/Product";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  const { products, loading, error } = useProducts()

  return (
    <div className='page'>
      <div className='container'>
        { loading && <Loader /> }
        { error && <ErrorMessage error={ error } /> }
        <div className='productList'>
          { products.map(product => <Product product={ product } key={ product.id } />) }
        </div>
      </div>
    </div>
  );
}

export default App;
