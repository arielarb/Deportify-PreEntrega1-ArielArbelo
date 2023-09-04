import { createContext, useState, useContext } from "react"

export const CartContext = createContext()

export function CartProvider({children}) {
  const [quantityItem, setQuantityItem] = useState(0);

  const increaseQuantity = () => {
    setQuantityItem(quantityItem + 1);
  }

  const decreaseQuantity = () => {
    setQuantityItem(quantityItem - 1);
  }

  return (
    <CartContext.Provider 
      value={{ quantityItem, decreaseQuantity, increaseQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext);
}