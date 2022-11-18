import { Layout } from "../components/Layout";
import { ProductsList } from "../components/ProductsList";
import { ProductSearch } from "../components/ProductsSearch";
import { ProductsFilter } from "../components/ProductsFilter";
import { ProductsCategory } from "../components/ProductsCategory";

export function MainPage() {
  return (
    <Layout>
      <div className="container">
        <section>
          <h1>Store</h1>
          <p>Find product</p>
          <div>
            <ProductSearch />
          </div>
        </section>
        <section>
          <h2>Our Products</h2>

          <ProductsCategory />
          {/*<ProductsFilter />*/}

          <ProductsList />
        </section>
      </div>
    </Layout>
  );
}