//@ts-check

export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    // isNew: isNew || true,
    // stock: stock || 20
    // Es mejor usar el nullish-coalescing => ??
    // para evitar posibles comportamiento no deseados
    // ya que en javascript

    // 0 === false
    // '' === false
    // false === false
    isNew: isNew ?? true,
    stock: stock ?? 20
  }
}



const product1 = createProduct(1, true, 32)
console.log(product1);

const product2 = createProduct('Product 2')
console.log(product2);

const product3 = createProduct(1, false, 0)
console.log(product3);