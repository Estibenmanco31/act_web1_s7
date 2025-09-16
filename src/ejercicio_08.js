// Desestructuración de Arrays
// Dado el array ['JavaScript', 'Python', 'Java', 'C++', 'Go']:
// - Extrae los primeros 3 lenguajes 
// - Extrae el primero y el último 
// - Usa rest operator para separar el primero del resto 
// - Intercambia dos variables usando desestructuración

const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];
console.log("Array original:", lenguajes);

const [primero, segundo, tercero] = lenguajes;
console.log("Primeros 3:", primero, segundo, tercero);

const [first, , , , last] = lenguajes;
console.log("Primero y último:", first, last);

const [head, ...resto] = lenguajes;
console.log("Primero:", head);
console.log("Resto:", resto);

let a = "Python";
let b = "Java";
console.log("Antes del intercambio: a =", a, ", b =", b);
[a, b] = [b, a];
console.log("Después del intercambio: a =", a, ", b =", b);
