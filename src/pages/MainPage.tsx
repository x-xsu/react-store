import { Layout } from "../components/Layout";
import { ProductsList } from "../components/ProductsList";
import { ProductSearch } from "../components/ProductsSearch";
import { ProductFilter } from "../components/ProductsFilter";

export function MainPage() {
  return (
    <Layout>
      <div className="container">
        <section>
          <h2>Our Products</h2>

          <div className={ "flex-element-center" }>
            <ProductSearch />
            <ProductFilter />
          </div>

          <ProductsList />
        </section>
      </div>
    </Layout>
  );
}