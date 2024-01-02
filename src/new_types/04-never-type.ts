//@ts-check


// Cuando una funcion tiende a nunca parar, Typescript tiene la capacidad de inferir eso mismo
// Asignandole a la funcion el tipo NEVER
const neverEnd = () => {
  while (true) {
    console.log('Nunca parar de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'string!';
  }else if (Array.isArray(input)) {
    return 'Array!';
  } else {
    return fail('No hay match')
  }
}

console.log(example('Hola soy un string'));
console.log(example([1, 2, 'array_item']));
console.log(example(2342));
console.log(example('Hola soy un string despues del fail'));