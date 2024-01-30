
const empleados = [
    {
        id: 1,
        nombre: 'juan'
    },
    {
        id: 2,
        nombre: 'roberto'
    },
    {
        id: 3,
        nombre: 'ana'
    },
];

const salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id: 2,
        nombre: 3000
    },
];

const getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        
        const empleado = empleados.find( e => e.id === id )?.nombre;
        
        (empleado)
            ? resolve(empleado)
            : reject(`El empleado con id ${id} no existe`)
    } );    
}

const getSalario = (id) => {

    return new Promise( (resolve, reject) => {

        const salario = salarios.find( s => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`Salario con id ${id} no existe`);
    });
}

const id = 3;

// getEmpleado(id)
//     .then( empleado => {

//         getSalario(id)
//             .then( salario => console.log('El empleado '+empleado+' tiene un salario de '+salario) )
//             .catch( e => console.log(e) )
//     } )
//     .catch( err => console.log(err) )


let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;

        return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch( err => console.log(err) )