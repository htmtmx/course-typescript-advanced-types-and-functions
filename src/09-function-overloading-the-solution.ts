//@ts-check

// Nico => [N,i,c,o]
// string => string[]
// [N,i,c,o] => Nico
// string[] => string

// La sobrecarga de funciones solo se efectua cuando declaramos la funcion con "function"

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;


export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string'){
    return input.split('');
  } else if (typeof input === 'number'){
    return true;
  }
}

const rtaArray = parseStr('Haziel');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}

const rtaString = parseStr(['H', 'a', 'z', 'i', 'e', 'l']);
const rtaNumber = parseStr(666);

console.log('Es un array: ', rtaArray);
console.log('Es un string: ', rtaString);
console.log('Es un numero: ', rtaNumber);

