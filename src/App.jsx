import './App.css'
import { NavBar } from './componentes/NavBar'
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';

function App() {
  return (
  <>
      <NavBar />
      <ItemListContainer /> 
      <ItemDetailContainer />
  </>
  )
}

export default App;
