import Boton from "./Botones";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import logoDeportify from "./media/logoDeportify.png";
import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

export function NavBar() {
  const {quantityItem} = useCartContext()
  return (
    <nav className="navbar">
      <Link to='/'> 
        <img className="logo" src={logoDeportify} alt="logo Deportify" />
      </Link>
      <div>
        <Link to="/productos/Zapatillas"> <Boton texto="Zapatillas" /> </Link> 
        <Link to="/productos/Pantalones"> <Boton texto="Pantalones" /> </Link> 
        <Link to="/productos/Remeras"> <Boton texto="Remeras" /> </Link> 
        <Link to="/productos/Camperas"> <Boton texto="Camperas" /> </Link> 
      </div> 
      <Link to="/carrito"><CartWidget item={quantityItem} /></Link>
    </nav>
  )
}

{/* export default NavBar */}