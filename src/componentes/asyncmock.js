
const Productos = [
  { id: 1, images: 'https://nikearprod.vtexassets.com/arquivos/ids/700116/DC7723_701_A_PREM.jpg?v=638229716908600000', title: 'Zapatillas Nike', description: 'Zapatillas color azul para hombre', price: '$20.000' },
  { id: 2, images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxazJxOzaC5QwjtQ0n0xvNVqMP7YaLbbvQCg&usqp=CAU', title: 'Zapatillas Adidas', description: 'Zapatillas color rojo para mujer', price: '$40.000' },
  { id: 3, images: 'https://pampero.com.ar/wp-content/uploads/2022/03/113109001-1.jpg', title: 'Campera Nike', description: 'Campera color azul para hombres', price: '$80.000' },
  { id: 4, images: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0ma_LWV_VdzQp9MmmBSPhIl_k4J0I5WatA&usqp=CAU', title: 'Campera Under Armour', description: 'Campera color rojo para mujer', price: '$10.000' },
  { id: 5, images: 'https://ae01.alicdn.com/kf/Hcd7bd5d09df34a13ab34ee41650033e0p.jpg_640x640q90.jpg', title: 'Pantalon Nike', description: 'Pantalon color azul para hombres', price: '$30.000' },
  { id: 6, images: 'https://ae01.alicdn.com/kf/Hcd7bd5d09df34a13ab34ee41650033e0p.jpg_640x640q90.jpg', title: 'Pantalon Adidas', description: 'Pantalon color rojo para mujer', price: '$20.000' },
  { id: 7, images: 'https://http2.mlstatic.com/D_NQ_NP_728866-MLA69817869153_062023-O.webp', title: 'Remera Nike', description: 'Remera color azul para hombres', price: '$30.000' },
  { id: 8, images: 'https://http2.mlstatic.com/D_NQ_NP_638005-MLA54719823517_032023-O.webp', title: 'Remera Adidas', description: 'Remera color rojo para mujer', price: '$20.000' }
]

export const RenderProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos)
    }, 2000)
  })
}

export const RenderProductosDetalles = (prodId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newProd = Productos.filter(prod => prod.id === prodId)
      resolve(newProd)
    }, 2000)
  })
}