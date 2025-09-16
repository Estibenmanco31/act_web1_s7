// Métodos de Objeto
// Crea un objeto y demuestra: 
// - Object.keys() -obtener claves 
// - Object.values() - obtener valores 
// - Object.entries() - obtener pares clave-valor 
// - Iterar sobre el objeto con forEach()

const producto = {
  id: 1,
  nombre: "Laptop",
  precio: 1200,
  disponible: true
};

const claves = Object.keys(producto);
console.log("Claves:", claves);

const valores = Object.values(producto);
console.log("Valores:", valores);

const entradas = Object.entries(producto);
console.log("Entradas:", entradas);

Object.entries(producto).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});

