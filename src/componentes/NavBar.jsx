import Boton from "./Botones";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import logoDeportify from "./media/logoDeportify.png";

export function NavBar() {

  return (
    <nav className="navbar">
      <img className="logo" src={logoDeportify} alt="logo Deportify" />
      <div>
        <Boton texto="Zapatillas" />
        <Boton texto="Pantalones" />
        <Boton texto="Remeras" />
        <Boton texto="Camperas" />
      </div> 
      <CartWidget items={9} />
    </nav>
  )
}

{/* export default NavBar */}