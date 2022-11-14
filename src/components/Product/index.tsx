import styles from './styles.module.scss';
import cn from 'classnames';

import { ReactComponent as Star } from '../../assets/svg/star.svg'
import { ReactComponent as Share } from '../../assets/svg/share.svg'
import { ReactComponent as Like } from '../../assets/svg/like.svg'

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
        <button className={ cn('btn', 'btnEmphasize') }>Add to cart</button>
        <button className={ cn('btn') }>More info</button>
        <div className={ styles.actionBox }>
          <button className={ cn('btn', 'btnTransparent', styles.btnShare) }>
            <Share />
            <span>Share</span>
          </button>
          <button className={ cn('btn', 'btnTransparent', styles.btnLike) }>
            <Like />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
  )
}