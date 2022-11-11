import styles from './styles.module.scss';

import { ReactComponent as Star } from '../../assets/svg/star.svg'


import { IProduct } from "../../models";

interface ProductProps {
  product: IProduct
}


export function Product({ product }: ProductProps) {
  return (
    <div className={ styles.card }>
      <div className={ styles.info }>
        <img src={ product.image } alt={ product.title } className={ styles.image } />
        <div className={ styles.category }>{ product.category }</div>
        <div className={ styles.title }>{ product.title }</div>
        <div className={ styles.box }>
          <div className={ styles.rate }>
            <Star />
            <span>{ product.rating.rate }</span>
          </div>
          <div className={ styles.price }>$ { product.price }</div>
        </div>
      </div>
      <div className={ styles.action }>
        <button className={ styles.btnCart }>More info</button>
        <button className={ styles.btnCart }>Add to cart</button>
        <button className={ styles.btnLike }>Like</button>
      </div>
    </div>
  )
}