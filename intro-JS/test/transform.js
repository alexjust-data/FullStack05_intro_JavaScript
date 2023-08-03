
/**
 * Ejercicio 3 Transformaciones
 */


const datos = [
    {
      id: 1,
      nombre: 'Juan',
      habilidades: ['JavaScript', 'HTML', 'CSS'],
      proyectos: [
        { id: 1, nombre: 'Proyecto 1' },
        { id: 2, nombre: 'Proyecto 2' }
      ]
    },
    {
      id: 2,
      nombre: 'María',
      habilidades: ['Python', 'SQL', 'Django'],
      proyectos: [
        { id: 3, nombre: 'Proyecto 3' },
        { id: 4, nombre: 'Proyecto 4' }
      ]
    },
    {
      id: 3,
      nombre: 'Pedro',
      habilidades: ['Java', 'Spring', 'Hibernate'],
      proyectos: [
        { id: 5, nombre: 'Proyecto 5' },
        { id: 6, nombre: 'Proyecto 6' }
      ]
    }
];



// metodo 1
let desarrolladoresJavascript1 = [];
const objects = Object.values(datos);
for (let i of objects){
    if (i.habilidades.includes("JavaScript")) {
        desarrolladoresJavascript1.push(i);
    }
};

console.log(desarrolladoresJavascript1);



let nombresProyectos1 = [];

for (let i of datos) {
    for (let proyecto of i.proyectos) {
        nombresProyectos1.push(proyecto.nombre);
    }
};
console.log(nombresProyectos1);

