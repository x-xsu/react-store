import styles from "./styles.module.scss";

import { ReactComponent as Search } from "../../assets/svg/loupe.svg"
import { useInput } from "../../hooks/input";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import axios from "../../axios";
import { IProduct, ServerResponse } from "../../models/models";

export function ProductSearch() {
  const input = useInput("")
  const [products, setProducts] = useState<IProduct[]>([])
  const debounced = useDebounce<string>(input.value)

  async function searchProducts() {
    const response = await axios.get<ServerResponse<IProduct>>("products")
    console.log(response.data)
    setProducts(response.data.results)
  }

  useEffect(() => {
    if (input.value.length > 3) {
      searchProducts()
    }
    console.log("debounced", debounced)
  }, [debounced])

  return (
    <div className={ styles.search }>

      <div className={ styles.boxInput }>
        <button>
          <Search />
        </button>
        <input
          type="text"
          className={ "" }
          placeholder={ "Search" }
          { ...input }
        />
      </div>

      <ul className={ styles.dropdown }>
        { products.map(products => (
          <li key={ products.id }>{ products.title }</li>
        )) }
      </ul>

    </div>
  )
}