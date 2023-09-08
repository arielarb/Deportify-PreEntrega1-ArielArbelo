import './App.css'
import './componentes/ItemListContainer.css'
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/cartContext.jsx';
/* import { doc, getDoc} from "./firebase/firestone";
import { useEffect } from 'react';
import { firestore } from "./firebase/client"; */

function App() {
   /* useEffect(() => {
      const q = query(
      collection(firestore, "items"),
      where("price", ">", 50),  
      orderBy("price", "desc")
    );
    getDocs(q).then((snapshot) => {
      console.log(snapshot);
      snapshot.forEach((doc) => console.log(doc.data()));
    });

    const docRef = doc(firestore, "Productos", "Zapatillas")
    getDoc(docRef).then((snapshot) => {
      console.log({ snapshot })
      if (snapshot.exists()) {
        console.log("La información del documento es: ", snapshot.data())
      } else {
        console.log("El documento no existe")
      }
    }) 
  }, [])*/
  
  return (
  <>
    <CartProvider>
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos!"/>} /> 
        <Route path="/productos/:category" element={<ItemListContainer/>} /> 
         <Route path="/item/:id" element={<ItemDetailContainer />} />  
        <Route path='*' element={<h1>404 NOT FOUND</h1> } />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  </>
  )
}

export default App;
