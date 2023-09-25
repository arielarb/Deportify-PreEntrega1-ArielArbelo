import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { useCartContext } from "../context/cartContext"
import { CartToggle } from './CartToggle';


function ItemDetail({...item}) {
  
  const { carrito, agregarAlCarrito } = useCartContext();
    console.log(carrito);

    const [cantidad, setCantidad] = useState(0);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <Card style={{ width: '18rem', margin: '10px', padding: '7px', backgroundColor: 'grey'}}>
      <Card.Img variant="top" src={item.image} style={{ width: '100%' }}/>
      <Card.Body style={{ color: 'white'}}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          Categoría: <b>{item.category}</b> <br /><br />
          {item.description}
          <br />
          Precio: {item.price}
        </Card.Text>
        <CartToggle
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
      </Card.Body>
    </Card>
  );
} 

export default ItemDetail;