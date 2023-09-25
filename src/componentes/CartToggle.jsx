import React from 'react'

export const CartToggle = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className='toggle'>
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}
