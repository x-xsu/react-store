import styles from "./styles.module.scss";
import axios from "../../axios";
import { useEffect, useState } from "react";

import { ReactComponent as CloseSvg } from "../../assets/svg/close.svg"

export function ProductsCategory() {
  const [category, setCategory] = useState([])

  async function productsCategory() {
    const res = await axios.get("products/categories").then((res) => {
      return res.data
    })
    setCategory(res)
  }

  useEffect(() => {
    productsCategory()
  })

  return (
    <div className={ styles.category }>
      {
        category.map((category, index: number) => (
          <button className={ "btn btnWhite" } key={ index }>
            <CloseSvg />
            <span>{ category }</span>
          </button>
        ))
      }

    </div>
  )
}