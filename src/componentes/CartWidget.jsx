import carrito from "./media/carrito.png";
import "./CartWidget.css"
import { useCartContext } from "../context/cartContext";

function CartWidget({ item }) {
  const {quantityItem} = useCartContext()
  return <>
    <div className="carritoCompleto">
      <img className="carrito" src={carrito} alt="carrito" />
      <div>{item}</div>
    </div>
    </>
}

export default CartWidget;  