import { products, addProduct, updateProduct, findProducts } from "./products/product.service";
import { faker } from '@faker-js/faker';

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    stock: faker.number.int({min:0, max: 900}),
    size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
    color: faker.color.human(),
    description: faker.commerce.productDescription(),
    image: faker.image.dataUri(),
    isNew: faker.datatype.boolean(),
    price: parseInt(faker.commerce.price(), 10),
    tags: faker.word.words().split(','),
    categodyId: faker.string.uuid()
  })
}

console.log(products);

const product = products[0];

const updatedProduct = updateProduct(product.id, {
  title: 'UPDATE de product',
  // title: faker.lorem.lines(1),
  stock: faker.number.int({min: 0, max: 90}),
});

console.log("Updated product ", updatedProduct);

const productsFinded = findProducts({
  stock: 90,
  color: 'red',
  size: 'XL',
  isNew: true,
  tags: ['tag1', 'tag2']
});

console.log(productsFinded);