import { useEffect, useState } from "react"
import { Loader } from "./Loader";
import { RenderProductosDetalles } from "./asyncmock";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = ({ itemsId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});
  useEffect(() => {
    RenderProductosDetalles(itemsId)
      .then((response) => {
        console.log(response);
        setItem(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) return <Loader />
  
  return (
    <ItemDetail
           key={item.id}
           images={item.images}
           title={item.title}
           description={item.description}
           price={item.price}
  />
  )
}