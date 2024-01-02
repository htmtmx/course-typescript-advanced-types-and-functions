import { products, addProduct } from "./products/product.service";
import { fa, faker } from '@faker-js/faker';
import { Sizes } from "./products/product.model";

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