import Items from "./Item";

export function ItemListProd({ productos }) {
  return (
    <div>

      {productos.map((prod) => <Items key={prod.id} {...prod} />)}

    </div>
  )
}

/* export function ItemList({ ItemsList = [] }) {
  return (
    <div>

      {ItemsList.map((item) => {
        return (
         <Items
           key={item.id}
           images={item.images}
           title={item.title}
           description={item.description}
           price={item.price}
         />
        )
      })}

    </div>
  )
} */