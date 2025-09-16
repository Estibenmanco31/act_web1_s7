// Gestión de Inventario Básico
// Crea un array de objetos que represente un inventario de productos. Cada producto debe tener: 
// id, nombre, precio, categoria, stock.
// Declara al menos 5 productos y muestra: 
// - Todos los productos 
// - Total de productos en inventario 
// - Valor total del inventario

const inventario = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónica", stock: 5 },
  { id: 2, nombre: "Teléfono", precio: 800, categoria: "Electrónica", stock: 8 },
  { id: 3, nombre: "Silla", precio: 150, categoria: "Muebles", stock: 12 },
  { id: 4, nombre: "Mesa", precio: 300, categoria: "Muebles", stock: 4 },
  { id: 5, nombre: "Audífonos", precio: 100, categoria: "Accesorios", stock: 20 }
];

console.log(" Inventario completo:");
console.log(inventario);
console.log(" Total de productos distintos:", inventario.length);
const valorTotal = inventario.reduce((total, producto) => {
  return total + (producto.precio * producto.stock);
}, 0);
console.log(" Valor total del inventario:", valorTotal);
