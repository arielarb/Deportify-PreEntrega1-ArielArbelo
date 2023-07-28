import Boton from "./Botones";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export function NavBar() {
  return (
    <nav className="navbar">
      <h3>Deportify</h3>
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