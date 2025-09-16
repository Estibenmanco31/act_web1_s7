// Manipulación de Arrays
// Crea un array inicial [1, 2, 3, 4, 5] y demuestra: 
// - push() y pop() 
// - agregar y quitar del final 
// - shift() y unshift() 
// - agregar y quitar del inicio 
// - splice() - insertar elementos en posición específica 
// - slice() - extraer porción sin modificar original

let numeros = [1, 2, 3, 4, 5];
console.log("Inicial:", numeros);

numeros.push(6);
console.log("Después de push(6):", numeros);

let ultimo = numeros.pop();
console.log("Después de pop():", numeros, " (eliminado:", ultimo, ")");

numeros.unshift(0);
console.log("Después de unshift(0):", numeros);

let primero = numeros.shift();
console.log("Después de shift():", numeros, " (eliminado:", primero, ")");

numeros.splice(2, 0, 99);
console.log("Después de splice(2,0,99):", numeros);

let copia = numeros.slice(1, 4); 
console.log("slice(1,4):", copia);
console.log("Array original sigue igual:", numeros);
