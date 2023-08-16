import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Items({ title, images, description, price }) {
  return (
    <Card style={{ width: '18rem', margin: '10px', padding: '7px', backgroundColor: 'grey'}}>
       <Card.Img variant="top" src={images} style={{ width: '100%' }}/> 
      <Card.Body style={{ color: 'white'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
           {description} 
          <br />
          Precio: {price}
        </Card.Text>
        <Button variant="primary">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default Items;