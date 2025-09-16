// Análisis de Ventas con reduce()
// Dado un array de ventas con producto, cantidad, precio, fecha:
// Usa reduce() para calcular: 
// - Total de ingresos 
// - Producto más vendido (por cantidad) 
// - Promedio de venta por transacción

const ventas = [
  { producto: 'Laptop', cantidad: 2, precio: 1000, fecha: '2025-01-10' },
  { producto: 'Mouse', cantidad: 5, precio: 25,   fecha: '2025-01-11' },
  { producto: 'Teclado', cantidad: 3, precio: 75, fecha: '2025-01-12' },
  { producto: 'Laptop', cantidad: 1, precio: 1000, fecha: '2025-01-13' },
  { producto: 'Mouse', cantidad: 4, precio: 25,   fecha: '2025-01-14' }
];

const resumen = ventas.reduce((acc, venta) => {
  const ingreso = venta.cantidad * venta.precio;

  acc.totalIngresos += ingreso;

  acc.productos[venta.producto] = (acc.productos[venta.producto] || 0) + venta.cantidad;

  acc.transacciones.push(ingreso);

  return acc;
}, { totalIngresos: 0, productos: {}, transacciones: [] });

const productoMasVendido = Object.entries(resumen.productos)
  .reduce((max, [producto, cantidad]) => 
    cantidad > max.cantidad ? { producto, cantidad } : max,
    { producto: null, cantidad: 0 }
  );

const promedioPorTransaccion = resumen.totalIngresos / resumen.transacciones.length;

console.log("Total de ingresos:", resumen.totalIngresos); 
console.log("Producto más vendido:", productoMasVendido); 
console.log("Promedio por transacción:", Math.round(promedioPorTransaccion * 100) / 100);

