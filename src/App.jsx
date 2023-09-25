import './App.css'
import './componentes/ItemListContainer.css'
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/cartContext.jsx';
import { CartCheckOut } from './componentes/CartCheckOut';
import Checkout from './componentes/Checkout';


function App() {
  
  return (
  <>
    <CartProvider>
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos!"/>} /> 
        <Route path="/productos/:category" element={<ItemListContainer/>} /> 
        <Route path="/item/:id" element={<ItemDetailContainer />} />  
        <Route path="/carrito" element={<CartCheckOut />} />
        <Route path="/checkout" element={<Checkout />}/>  
        <Route path='*' element={<h1>404 NOT FOUND</h1> } />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  </>
  )
}

export default App;
