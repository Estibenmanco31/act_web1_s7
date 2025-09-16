// Ordenamiento y Reversión
// Crea arrays de:
// - Números desordenados 
// - ordena ascendente y descendente 
// - Nombres de personas 
// - ordena alfabéticamente 
// - Objetos con propiedad edad 
// - ordena por edad 
// - Usa reverse() para invertir el orden

let numeros = [42, 5, 19, 100, 7];
console.log("Original:", numeros);

let asc = [...numeros].sort((a, b) => a - b);
console.log("Ascendente:", asc);

let desc = [...numeros].sort((a, b) => b - a);
console.log("Descendente:", desc);

let nombres = ["Carlos", "Ana", "Beto", "Diana"];
console.log("\nNombres Original:", nombres);

let alfabetico = [...nombres].sort();
console.log("Alfabético:", alfabetico);

let personas = [
  { nombre: "Alicia", edad: 25 },
  { nombre: "Beto", edad: 30 },
  { nombre: "Carlos", edad: 20 },
  { nombre: "Diana", edad: 28 }
];
console.log("\nPersonas Original:", personas);

let porEdadAsc = [...personas].sort((a, b) => a.edad - b.edad);
console.log("Por edad (asc):", porEdadAsc);

let invertido = [...personas].reverse();
console.log("\nArray invertido con reverse():", invertido);
