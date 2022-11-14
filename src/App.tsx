import { useProducts } from "./hooks/products";

import { Product } from "./components/Product";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  const { products, loading, error } = useProducts()

  return (
    <div className='page'>
      <div className='container'>
        <section>
          <h2>Our Products</h2>
          { loading && <Loader /> }
          { error && <ErrorMessage error={ error } /> }

          <div className='productList'>
            { products.map(product => <Product product={ product } key={ product.id } />) }
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
