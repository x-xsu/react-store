import { Layout } from "../components/Layout";

import { ProductSearch } from "../components/ProductSearch";
import { ProductFilter } from "../components/ProductFilter";

import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { ProductCard } from "../components/ProductCard";

import { useEffect } from "react";
import { fetchProducts } from "../store/actions/productActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

export function MainPage() {
  const dispatch = useAppDispatch()
  const { loading, error, products } = useAppSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <Layout>
      <div className='container'>
        <section>
          <h2>Our Products</h2>

          <ProductSearch />
          <ProductFilter />

          { loading && <Loader /> }
          { error && <ErrorMessage error={ error } /> }
          <div className='productList'>
            { products.map(product => <ProductCard product={ product } key={ product.id } />) }
          </div>

        </section>
      </div>
    </Layout>
  );
}