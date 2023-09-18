import Card from 'react-bootstrap/Card';
import { CartToggle } from './CartToggle';
import { useCartContext } from '../context/cartContext';
import { useState } from 'react';

function ItemDetail({ title, images, price, description, category }) {
  return (
    <Card style={{ width: '18rem', margin: '10px', padding: '7px', backgroundColor: 'grey'}}>
      <Card.Img variant="top" src={images} style={{ width: '100%' }}/>
      <Card.Body style={{ color: 'white'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Categoría: <b>{category}</b> <br /><br />
          {description}
          <br />
          Precio: {price}
        </Card.Text>
        <CartToggle />  
      </Card.Body>
    </Card>
  );
} 

export default ItemDetail;