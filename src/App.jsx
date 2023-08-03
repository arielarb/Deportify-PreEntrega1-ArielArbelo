import './App.css'
import { NavBar } from './componentes/NavBar'
import { ItemListContainer } from './componentes/ItemListContainer';

function App() {
  return (
  <>
      <NavBar />
      <ItemListContainer texto="¡Bienvenidos a Deportify!"/>
  </>
  )
}

export default App;
