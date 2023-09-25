import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Items({...item}) {
  return (
    <Card style={{ width: '18rem', margin: '10px', padding: '7px', backgroundColor: 'grey'}}>
      <Card.Img variant="top" src={item.image} style={{ width: '100%' }} /> 
      < Card.Body style={{ color: 'white'}}>
        <Card.Title>{item.title}</Card.Title>
        <br /> 
         <Card.Text>
{/*           {description} 
          <br /> */}
          Precio: {item.price}
        </Card.Text>
        <Link to={`/item/${item.id}`}> <Button variant="primary">Ver detalles</Button> </Link>  
      </Card.Body>
    </Card>
  );
}

export default Items;