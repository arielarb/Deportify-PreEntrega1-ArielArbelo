import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Items({ id, title, images, price}) {
  return (
    <Card style={{ width: '18rem', margin: '10px', padding: '7px', backgroundColor: 'grey'}}>
      <Card.Img variant="top" src={images} style={{ width: '100%' }} /> 
      < Card.Body style={{ color: 'white'}}>
        <Card.Title>{title}</Card.Title>
        <br /> 
         <Card.Text>
{/*           {description} 
          <br /> */}
          Precio: {price}
        </Card.Text>
        <Link to={`/item/${id}`}> <Button variant="primary">Ver detalles</Button> </Link>  
      </Card.Body>
    </Card>
  );
}

export default Items;