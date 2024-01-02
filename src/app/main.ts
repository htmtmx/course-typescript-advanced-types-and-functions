import { products, addProduct } from "./products/product.service";

addProduct({
  id: '2',
  title: 'Lord of rings',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 34,
  size: 'S',
  category: {
    id: '32',
    name: 'Fantasy',
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

console.log(products);