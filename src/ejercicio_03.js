// Transformación de Datos con map()
// Crea un array de estudiantes con nombre, edad, notas(array de números).
// Usa map() para: 
// - Crear un nuevo array con solo los nombres 
// - Crear un array con el promedio de cada estudiante 
// - Agregar una propiedad estado("Aprobado" si promedio >= 70, "Reprobado" si < 70)

const estudiantes = [
  { nombre: 'Alicia', edad: 20, notas: [80, 90, 75] },
  { nombre: 'Beto',  edad: 22, notas: [60, 65, 58] },
  { nombre: 'Carlos',edad: 19, notas: [70, 70, 70] },
  { nombre: 'Diana', edad: 21, notas: [100,95, 98] }
];
const nombres = estudiantes.map(est => est.nombre);


const promedios = estudiantes.map(est => {
  const suma = est.notas.reduce((acc, n) => acc + n, 0);
  const prom = suma / est.notas.length;
  return Math.round(prom * 100) / 100; 
});


const estudiantesConEstado = estudiantes.map(est => {
  const suma = est.notas.reduce((acc, n) => acc + n, 0);
  const prom = suma / est.notas.length;
  const promRedondeado = Math.round(prom * 100) / 100;
  return {
    ...est,
    promedio: promRedondeado,
    estado: promRedondeado >= 70 ? 'Aprobado' : 'Reprobado'
  };
});

console.log(nombres);
console.log(promedios);
console.log(estudiantesConEstado);
