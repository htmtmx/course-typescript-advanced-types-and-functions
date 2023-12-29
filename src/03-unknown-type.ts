//@ts-check

let anyVar: any;
anyVar = 'nicolas';
anyVar = 123;
anyVar = true;
anyVar = [1, 2, 3, 4, 5];
anyVar = {
  username: 'nicolas',
  age: 19,
  isPro: true,
};

anyVar.toUpperCase();

let isNew: boolean = anyVar;
console.log(isNew);

// Any permite asignar cualquier tipo de dato a una variable
// pero no permite acceder a los métodos de los tipos de datos
// que se asignan a la variable
// Tiene una brecha de seguridad que permite asignar cualquier
// tipo de dato a una variable, lo cual puede generar errores
// en tiempo de ejecución

let unknownVar: unknown;
unknownVar = 'nicolas';
unknownVar = 123;
unknownVar = true;
unknownVar = [1, 2, 3, 4, 5];
unknownVar = {
  username: 'nicolas',
  age: 19,
  isPro: true,
};

unknownVar.toUpperCase();

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}
if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}


const parse = (str: string):unknown => {
  return JSON.parse(str)
}


// Unknown permite asignar cualquier tipo de dato a una variable
// pero no permite acceder a los métodos de los tipos de datos
// que se asignan a la variable.
// No tiene una brecha de seguridad que permita asignar cualquier
// tipo de dato a una variable, lo cual evita errores