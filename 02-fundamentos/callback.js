
// setTimeout(() => {
//     console.log('hola mundo');
// }, 1000);


const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'juan'
    }

    setTimeout( () => {
        callback(user);
    }, 1500 );
}

getUserById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});