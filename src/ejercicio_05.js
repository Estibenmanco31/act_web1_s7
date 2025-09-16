// Búsqueda y Verificación
// Crea un array de usuarios con id, nombre, email, activo.
// Implementa búsquedas usando: 
// - find() para buscar usuario por email 
// - findIndex() para obtener posición de usuario por id 
// - some() para verificar si hay usuarios inactivos 
// - every() para verificar si todos tienen email válido (contiene @)

const usuarios = [
  { id: 1, nombre: 'Alicia', email: 'alicia@mail.com', activo: true },
  { id: 2, nombre: 'Beto', email: 'beto@mail.com', activo: false },
  { id: 3, nombre: 'Carlos', email: 'carlos@mail.com', activo: true },
  { id: 4, nombre: 'Diana', email: 'diana@mail.com', activo: true }
];

const buscarPorEmail = usuarios.find(user => user.email === 'beto@mail.com');
console.log("Usuario encontrado por email:", buscarPorEmail);

const indiceUsuario = usuarios.findIndex(user => user.id === 3);
console.log("Posición del usuario con id=3:", indiceUsuario);

const hayInactivos = usuarios.some(user => user.activo === false);
console.log("¿Hay usuarios inactivos?:", hayInactivos);

const emailsValidos = usuarios.every(user => user.email.includes('@'));
console.log("¿Todos tienen email válido?:", emailsValidos);
