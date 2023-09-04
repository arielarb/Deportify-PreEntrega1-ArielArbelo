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
        <Link to="/category/Zapatillas"> <Boton texto="Zapatillas" /> </Link> 
        <Link to="/category/Pantalones"> <Boton texto="Pantalones" /> </Link> 
        <Link to="/category/Remeras"> <Boton texto="Remeras" /> </Link> 
        <Link to="/category/camperas"> <Boton texto="Camperas" /> </Link> 
      </div> 
      <CartWidget item={quantityItem} />
    </nav>
  )
}

{/* export default NavBar */}