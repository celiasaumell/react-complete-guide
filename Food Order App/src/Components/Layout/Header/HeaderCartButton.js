import btnStyles from "./HeaderCartButton.module.css";
import CartIcon from "../../UI/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <>
      <button className={btnStyles.button}>
        <span className={btnStyles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={btnStyles.badge}>0</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
