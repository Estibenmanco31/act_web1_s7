// Desestructuración de Objetos
// Crea un objeto persona con propiedades anidadas (dirección, contacto).Demuestra: 
// - Desestructuración básica 
// - Renombrado de variables 
// - Valores por defecto 
// - Desestructuración anidada 
// - Rest operator en objetos

const persona = {
  nombre: "Alicia",
  edad: 25,
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  },
  contacto: {
    email: "alicia@mail.com",
    telefono: "123456789"
  }
};

const { nombre, edad } = persona;
console.log("Nombre:", nombre, "Edad:", edad);

const { nombre: nombrePersona, edad: anios } = persona;
console.log("Renombrado ->", nombrePersona, anios);

const { profesion = "Desconocida" } = persona;
console.log("Profesión:", profesion);

const { direccion: { ciudad, pais }, contacto: { email } } = persona;
console.log("Ciudad:", ciudad, "País:", pais, "Email:", email);

const { nombre: n, ...resto } = persona;
console.log("Nombre:", n);
console.log("Resto del objeto:", resto);
