import { useContext, useReducer } from "react";

import btnStyles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../CartContext/cart-context";
const HeaderCartButton = (props) => {
  const context = useContext(CartContext);

  const numOfCartItems = context.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  

  return (
    <button className={btnStyles.button} onClick={props.onClick}>
      <span className={btnStyles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={btnStyles.badge}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
