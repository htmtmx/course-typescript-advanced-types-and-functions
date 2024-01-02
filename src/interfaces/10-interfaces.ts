type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
// type Product = {
//   id: string | number,
//   title: string,
//   createdAt: Date,
//   stock: number,
//   size?: Sizes
// }

interface Product {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'Game of thrones',
  createdAt: new Date(),
  stock: 45,
  size: 'XS'
})

const addProduct = (data: Product) => {
  products.push(data);
}

// A diferencia de los tipos, las interfaces pueden ser extendidas