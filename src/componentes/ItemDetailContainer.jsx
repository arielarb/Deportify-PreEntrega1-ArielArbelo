import { useEffect, useState } from "react"
import { Spinner } from "./Loader";
import { RenderProductosDetalles } from "./asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore"
import { firestore } from "../firebase/config"

export const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(firestore, "Productos", id);
    getDoc(docRef)
    .then((response) => {
      console.log(response.data())
      setItem(
         {...response.data(), id: response.id} 
         ) 
        } )
    /* RenderProductosDetalles(id)
      .then((response) => {
        setItem(response);
      })*/
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false)) 
  }, [id])

   if (isLoading) return <Spinner /> 
  
    return (
      <ItemDetail {...item}
/*         key={item.id}
        images={item.images}
        title={item.title}
        category={ item.category}
        description={item.description }
        price={item.price } */
      />
  )
}
