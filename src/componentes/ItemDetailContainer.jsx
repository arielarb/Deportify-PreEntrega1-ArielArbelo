import { useEffect, useState } from "react"
import { Spinner } from "./Loader";
import { RendProdPorCat } from "./asyncmock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(null);
  const id = useParams().id;
  console.log(id)

  useEffect(() => {
    RendProdPorCat(id)
      .then((response) => {
        setItem(response);
      })
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
