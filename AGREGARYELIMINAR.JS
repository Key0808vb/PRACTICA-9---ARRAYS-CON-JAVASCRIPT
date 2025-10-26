//Ejercicio 2: Agregar y eliminar elementos usando push, pop, unshift, shift.

let frutas = ["Manzana", "Banana", "Cereza"];

console.log("Array original:", frutas);

frutas.push("Naranja");
console.log("Después de push:", frutas);

frutas.pop();
console.log("Después de pop:", frutas);

frutas.unshift("Uva");
console.log("Después de unshift:", frutas);

frutas.shift();
console.log("Después de shift:", frutas);

Array original: [ 'Manzana', 'Banana', 'Cereza' ]
Después de push: [ 'Manzana', 'Banana', 'Cereza', 'Naranja' ]
Después de pop: [ 'Manzana', 'Banana', 'Cereza' ]
Después de unshift: [ 'Uva', 'Manzana', 'Banana', 'Cereza' ]
Después de shift: [ 'Manzana', 'Banana', 'Cereza' ]
