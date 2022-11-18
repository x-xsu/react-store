import styles from "./styles.module.scss";

import axios from "../../axios";

import { ReactComponent as Search } from "../../assets/svg/loupe.svg";
import { useInput } from "../../hooks/input";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../models/models";

export function ProductSearch() {
  const input = useInput("")
  const [results, setResults] = useState<IProduct[]>([])
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce<string>(input.value)
  const navigate = useNavigate()

  async function searchProducts(search: string) {
    const res = await axios.get<IProduct[]>("products").then(res => {
      return res.data.filter(product => {
        return product.title.toLowerCase().includes(search.toLowerCase())
      })
    })
    setResults(res)
  }

  useEffect(() => {
    if (debounced.length >= 3) {
      searchProducts(debounced).then(() => setDropdown(true))
    } else {
      setDropdown(false)
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

      { dropdown &&
        <ul className={ styles.dropdown }>
          {
            results.map(product => (
              <li key={ product.id } onClick={ () => navigate(`/product/${ product.id }`) }>
                <img src={ product.image } alt={ product.title } />
                <div>{ product.title }</div>
                <span>$ { product.price }</span>
              </li>
            ))
          }
        </ul>
      }

    </div>
  )
}