//@ts-check

export const createProduct = (
  id: string | number,
  // isNew?: boolean,
  // stock?: number
  // Para hacer uso de un valor por defecto en caso de que no se envie X parametro
  // ese parametro tomara el valor que asignemos, evitando asi el uso por default
  // de undefined cuando manejabamos parametros opcionales
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
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