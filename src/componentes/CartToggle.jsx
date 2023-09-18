import { useCartContext } from "../context/cartContext"
import { useState } from "react"

export const CartToggle = () => {
   const {decreaseQuantity, increaseQuantity } = useCartContext()
  
  const[buyItem, setBuyItem] = useState(0)

  const handleClickSumButton = () => {
    increaseQuantity();
    setBuyItem(buyItem + 1);
  };
  
  const handleClickLessButton = () => {
    if (buyItem > 1) {
      decreaseQuantity();
      setBuyItem(buyItem - 1);
    }
  }; 
  

  return (
    <div>
      <span>Comprar:  </span>
      <button onClick={handleClickLessButton}>-</button> {buyItem} <button onClick={handleClickSumButton}>+</button>
      <br /><br />
      <button>Agregar al carrito</button>
         </div >
       )
}
      
      /*  const handleClickButtons = () => {
            if (buyItem > 0) {
              decreaseQuantity();
              setBuyItem(buyItem - 1);
            } else {
              increaseQuantity();
              setBuyItem(buyItem + 1);
            }
       }; */

/*   const handleClickSumButton = () => {
        increaseQuantity();
        setBuyItem(buyItem + 1);
  };
  
  const handleClickLessButton = () => {
    if (buyItem > 0) {
      decreaseQuantity();
      setBuyItem(buyItem - 1);
    }
  }; */

/*   const handleClick = () => {
    return (
      <><button onClick={handleClickButtons}>-</button> {buyItem} <button onClick={handleClickButtons}>+</button></>

  } */
