import carrito from "./media/carrito.png";
import "./CartWidget.css";
import { useCartContext } from "../context/cartContext";

function CartWidget() {

  const {cantidadEnCarrito} = useCartContext()
  return <>
    <div className="carritoCompleto">
      <img className="carrito" src={carrito} alt="carrito" />
      <div>{cantidadEnCarrito()}</div>
    </div>
    </>
}

export default CartWidget;  