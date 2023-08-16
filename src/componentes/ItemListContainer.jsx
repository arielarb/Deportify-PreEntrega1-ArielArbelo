import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import { Loader } from "./Loader";
import { RenderProductos } from "./asyncmock";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [prod, setProd] = useState([]);
  useEffect(() => {
    RenderProductos()
      .then((response) => {
        console.log(response);
        setProd(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [])

  /*   return <> 
    <h1 className="estilos">{texto}</h1>
  </> */

  if (isLoading) return <Loader />
  
  return <>
    <ItemList className="estilos" ItemList={prod} />
    </>
}