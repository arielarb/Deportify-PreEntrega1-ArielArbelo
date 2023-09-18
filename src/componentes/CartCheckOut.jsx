import React from 'react'
import { useCartContext } from '../context/cartContext'

export const CartCheckOut = () => {

  const { quantityItem } = useCartContext()

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <br />
      <h2>Cantidad de productos en el carrito: {quantityItem} </h2>
      <br />
      <h2>Precio total: $ 0</h2>



    </div>
  )
}
