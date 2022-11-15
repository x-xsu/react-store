import styles from "./styles.module.scss";

import { ReactComponent as Search } from "../../assets/svg/loupe.svg"
import { useInput } from "../../hooks/input";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import { IProduct, ServerResponse } from "../../models/models";
import axios from "../../axios";

export function ProductSearch() {
  const input = useInput("")
  const [products, setProducts] = useState<IProduct[]>([])
  const debounced = useDebounce<string>(input.value)

  async function searchProducts() {
    const res = await axios.get<ServerResponse<IProduct[]>>("products")
    return res.data
    // setProducts(resData)
  }

  function getSearchProducts(value: string) {
    console.log(products)
    const res = products.filter(product => {
      return product.title.toLowerCase().includes(value.toLowerCase())
    })

    return res
  }

  useEffect(() => {
    const value = input.value
    if (value.length >= 3) {
      //  setProducts(resData)
    }
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
        {
          products.map(products => (
            <li key={ products.id }>{ products.title }</li>
          ))
        }
      </ul>

    </div>
  )
}