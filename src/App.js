import { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={showCartHandler} />}
      <Header cartHandler={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
