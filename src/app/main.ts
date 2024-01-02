import { products, addProduct } from "./products/product.service";
import { fa, faker } from '@faker-js/faker';
import { Sizes } from "./products/product.model";

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({min:0, max: 900}),
    size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
    color: faker.color.human(),
    description: faker.commerce.productDescription(),
    image: faker.image.dataUri(),
    isNew: faker.datatype.boolean(),
    price: parseInt(faker.commerce.price(), 10),
    tags: faker.word.words().split(','),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  })
}

console.log(products);