import React from 'react'
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom';

export const CartCheckOut = () => {

    const { carrito, precioTotal, vaciarCarrito } = useCartContext();

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div>
        <h1>Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.title}</h3>
                    <p>Precio unit: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío :(</h2>
        }
        
    </div>
  )
}
