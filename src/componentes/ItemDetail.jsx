import Card from 'react-bootstrap/Card';
import { CartToggle } from './CartToggle';

function ItemDetail({ title, image, price, description, category }) {
  return (
    <Card style={{ width: '18rem', margin: '10px', padding: '7px', backgroundColor: 'grey'}}>
      <Card.Img variant="top" src={image} style={{ width: '100%' }}/>
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