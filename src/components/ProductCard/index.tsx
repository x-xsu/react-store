import styles from "./styles.module.scss";
import cn from "classnames";

import { useNavigate } from "react-router-dom";
import { IProduct } from "../../models/models";

import { ReactComponent as StarSvg } from "../../assets/svg/star.svg"
import { ReactComponent as ShareSvg } from "../../assets/svg/share.svg"
import { ReactComponent as FavouriteSvg } from "../../assets/svg/like.svg"


interface ProductProps {
  product: IProduct
}

export function ProductCard({ product }: ProductProps) {
  const navigate = useNavigate()

  const clickHandler = () => navigate(`/product/${ product.id }`)

  return (
    <div className={ styles.product }>
      <div className={ styles.info }>
        <img src={ product.image } alt={ product.title } className={ styles.image } />
        <div className={ styles.category }>{ product.category }</div>
        <div className={ styles.title }>{ product.title }</div>
        <div className={ styles.box }>
          <div className={ styles.rate }>
            <StarSvg />
            <span>{ product.rating.rate }</span>
          </div>
          <div className={ styles.price }>$ { product.price }</div>
        </div>
      </div>
      <div className={ styles.action }>
        <button className={ cn("btn", "btnEmphasize") }>Add to cart</button>
        <button className={ cn("btn") } onClick={ clickHandler }>More info</button>
        <div className={ styles.actionBox }>
          <button className={ cn("btn", "btnTransparent", styles.btnShare) }>
            <ShareSvg />
            <span>Share</span>
          </button>
          <button className={ cn("btn", "btnTransparent", styles.btnLike) }>
            <FavouriteSvg />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
  )
}