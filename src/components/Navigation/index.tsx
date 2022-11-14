import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

import { ReactComponent as FavouriteSvg } from "../../assets/svg/like.svg";
import { ReactComponent as CartSvg } from "../../assets/svg/cart.svg";

export function Navigation() {
  return (
    <nav className={ styles.navigation }>
      <Link to="/favourite" className={ styles.item }>
        <span>Favourite</span>
        <FavouriteSvg className={ styles.iconFav } />
      </Link>
      <Link to="/cart" className={ styles.item }>
        <span>Cart</span>
        <CartSvg className={ styles.iconCart } />
      </Link>
    </nav>
  )
}