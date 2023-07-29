import carrito from "./media/carrito.png";
import "./CartWidget.css"

function CartWidget({ items }) {
  return <>
    <div className="carritoCompleto">
      <img className="carrito" src={carrito} alt="carrito" />
      <div>{items}</div>
    </div>
    </>
}

export default CartWidget;  