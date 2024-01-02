//@ts-check

// Array común
// Puede contener cualquier tipo de dato, n número de elementos
const prices: (string | number)[] = [1, 2, 3, 4, 2, '2', 2, 2];

// Tupla
// Tupla typada
// Puede contener un número fijo de elementos
// Cada elemento puede tener un tipo de dato diferente
// Se puede definir el tipo de dato de cada elemento
// const product: [string, number, boolean] = ['nicolas', 123, true];


let user: [string, number, boolean];
user = ['nicolas', 19, true]
// user = [19, 'nicolas']

console.log(user[1]);

// Destructuracion de tuplas
const [username, age] = user;
console.log(username);
console.log(age);