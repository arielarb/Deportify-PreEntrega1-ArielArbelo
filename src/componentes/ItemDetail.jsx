import Card from 'react-bootstrap/Card';
import { CartToggle } from './CartToggle';
import { useCartContext } from '../context/cartContext';
import { useState } from 'react';

/* function ItemDetail({ item }) {
  
  const {decreaseQuantity, increaseQuantity } = useCartContext()
  
  const[buyItem, setBuyItem] = useState(1)

  const handleClickSumButton = () => {
    increaseQuantity();
    buyItem < item.stock && setBuyItem(buyItem + 1);
  };
  
  const handleClickLessButton = () => {
    if (buyItem > 1) {
      decreaseQuantity();
      setBuyItem(buyItem - 1);
    }
  }; 
  
  const handleAddCart = () => {
    console.log({...item, buyItem})
   }

  return (
    <Card style={{ width: '18rem', margin: '10px', padding: '7px', backgroundColor: 'grey'}}>
      <Card.Img variant="top" src={item.images} style={{ width: '100%' }}/>
      <Card.Body style={{ color: 'white'}}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Categoría: <b>{item.category}</b> <br /><br />
          {item.description}
          <br />
          Precio: {item.price}
        </Card.Text>
        <CartToggle buyItem={buyItem} handleClickLessButton={handleClickLessButton} handleClickSumButton={handleClickSumButton} handleAddCart={handleAddCart} />  
      </Card.Body>
    </Card>
  );
} */

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