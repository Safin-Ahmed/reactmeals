import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item, qty = null) => {},
  removeItem: (id) => {},
});

export default CartContext;
