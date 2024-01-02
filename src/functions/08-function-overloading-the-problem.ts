//@ts-check

// Nico => [N,i,c,o]
// string => string[]
// [N,i,c,o] => Nico
// string[] => string

// La sobrecarga de funciones solo se efectua cuando declaramos la funcion con "function"

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

// Typescript no puede inferir el tipo de dto que va a devolver
// ya que ese analisis se hace mediante logica algoritmica
const rtaArray = parseStr('Haziel');
// si tratamos de acceder a metodos de un array en la variable "rtaArray"
// typescript no nos dejara
rtaArray.reverse()
// Para poder hacer uso de eso primero deberiamos aplicar una logica extra para verificar
// si el tipo de dato es Array y permitirnos usar esos metodos
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}

const rtaString = parseStr(['H', 'a', 'z', 'i', 'e', 'l']);

console.log('Es un array: ', rtaArray);
console.log('Es un string: ', rtaString);

