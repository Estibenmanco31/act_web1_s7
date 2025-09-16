// Filtrado de Productos por Categoría 
// Usando el inventario del ejercicio anterior, utiliza el método filter() para:
// - Mostrar solo productos de la categoría "Electrónicos" 
// - Mostrar productos con stock menor a 10 
// - Mostrar productos con precio mayor a $500


const inventario = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónica", stock: 5 },
  { id: 2, nombre: "Teléfono", precio: 800, categoria: "Electrónica", stock: 8 },
  { id: 3, nombre: "Silla", precio: 150, categoria: "Muebles", stock: 12 },
  { id: 4, nombre: "Mesa", precio: 300, categoria: "Muebles", stock: 4 },
  { id: 5, nombre: "Audífonos", precio: 100, categoria: "Accesorios", stock: 20 }
];

const electronicos = inventario.filter(p => p.categoria === "Electrónica");
console.log(" Productos electrónicos:");
console.log(electronicos);


const stockBajo = inventario.filter(p => p.stock < 10);
console.log(" Productos con stock menor a 10:");
console.log(stockBajo);


const caros = inventario.filter(p => p.precio > 500);
console.log(" Productos con precio mayor a $500:");
console.log(caros);
