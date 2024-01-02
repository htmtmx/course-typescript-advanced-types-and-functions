//@ts-check
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7];
numbers.push(8);
numbers.unshift(0);
console.log(numbers);

numbers.filter(() => { })

// ReadonlyArray es una interfaz que define un array de solo lectura
// que no permite modificar el array original, pero si permite iterar sobre el
// y usar metodos como filter, map, reduce, etc.
// No permite las mutaciones de los elementos del array