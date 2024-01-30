
const deadpool = {
    nombre: 'ana',
    apellido: 'lopez',
    edad: 12,
    getTodo() {
        return `${this.nombre} ${this.apellido} ${this.edad}`
    }
}

// console.log(deadpool.getTodo());
 
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const edad = deadpool.edad;

// console.log(nombre, apellido, edad);


// const {nombre, apellido, edad, getTodo } = deadpool;
// console.log(nombre, apellido, edad);


// function imprimirPersona({nombre, apellido, edad}) {
//     console.log(`${nombre} ${apellido} ${edad}`);
// }

// imprimirPersona(deadpool);


const personas = ['manuel', 'maria', 'ana'];

// const h1 = personas[0];
// console.log(h1);


// const [h1, h2, h3] = personas;
// console.log(h1, h2, h3);


// const [,, d3] = personas;
// console.log(d3);