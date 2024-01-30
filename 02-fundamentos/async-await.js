
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

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`El empleado con id ${id} no existe`)
    });
}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`Salario con id ${id} no existe`);
    });
}

const getInfoUsuario = async (id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es ${salario}`;

    } catch (error) {
        throw error;
    }
}

const id = 5;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))


