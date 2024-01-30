
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

const getEmpleado = (id, callback) => {

    const empleado = empleados.find( emp => emp.id === id )?.nombre;

    if(empleado) {
        callback(null, empleado);
    
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
    
}

const getSalario = (id, callback) => {

    const salario = salarios.find( sal => sal.id === id)?.salario;

    if(salario) {
        callback(null, salario);
    
    } else {
        callback(`Salario con id ${id} no existe`)
    }
}

const id = 3;

getEmpleado(id, (err, empleado) => {

    if(err) {
        return console.log(err);
    }

    getSalario(id, (err, salario) => {

        if(err) {
            return console.log(err);
        }
    
        console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
    })
})