import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import { Spinner } from "./Loader";
import { RenderProductos, RendProdPorCat } from "./asyncmock";
import { ItemListProd } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [prod, setProd] = useState([]);
  const { categoryId} = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? RendProdPorCat : RenderProductos

    asyncFunc(categoryId)
    /* RenderProductos() */
      .then((response) => {
        setProd(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [categoryId])


  if (isLoading) return <Spinner />
  
  return <>
      <h1>{greeting}</h1>
      <ItemListProd productos={prod} />
    </>
}

