
let usuarios = [{
    id: 1,
    nombre: 'Marcos'
},
{
    id: 2,
    nombre: 'petra'
}];

let telefonos = [{
    id: 1,
    telefono: 31228432
}, {
    id: 2,
    telefono: 31123421
}];


const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        if (usuarios.find(usuario => usuario.id === id)) {
            console.log('El usuario existe! ');
            resolve(obtenerTelefono(id));
        } else {
            reject('El usuario no existe! ');
        }
    });
}

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if (telefonos.find(Tele => Tele.id === id)) {
            resolve('El telefono existe! ');
        } else {
            reject('El telefono no existe! ');
        }
    });
}

obtenerUsuario(3)
    .then(res => {
        console.log(res);
    })
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.error(error);
    });

