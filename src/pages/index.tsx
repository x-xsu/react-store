import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Product } from "../components/Product";
import { useProducts } from "../hooks/products";
import { Layout } from "../components/Layout";

export function Main() {
  const { products, loading, error } = useProducts()

  return (
    <Layout>
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
    </Layout>
  );
}