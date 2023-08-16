import Items from "./Item";

export function ItemList({ ItemList = [] }) {
  return (
    <div>

      {ItemList.map((item) => {
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
}