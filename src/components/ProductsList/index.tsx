import styles from "./styles.module.scss";

import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";
import { ProductCard } from "../ProductCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
// import { isMobile } from "react-device-detect";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions/productActions";
// import cn from "classnames";

// const LIMIT_MOBILE = 4;
// const LIMIT_WEB = 8;

export function ProductsList() {
  const dispatch = useAppDispatch()
  const { loading, error, products } = useAppSelector(state => state.product)

  // const initialLimit = isMobile ? LIMIT_MOBILE : LIMIT_WEB;
  // const [limit, setLimit] = useState(initialLimit);
  //
  // const showMoreProducts = () => {
  //   setLimit(limit + 4);
  // };

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className={ styles.productList }>

      { loading && <Loader /> }
      { error && <ErrorMessage error={ error } /> }

      <div className={ styles.grid }>
        { products.map(product => <ProductCard product={ product } key={ product.id } />) }
      </div>

      {/*<button className={ cn("btn", styles.btn) } onClick={ showMoreProducts }>Show more</button>*/}
    </div>
  )
}