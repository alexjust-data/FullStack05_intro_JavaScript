
// Este programa simula una llamada asincrónica para obtener un usuario


// function obtenerUsuario(id) {
//     let usuario;
//     setTimeout( () => {
//         if (id === 1) {
//             usuario = { id: 1, nombre: 'John Doe'};
//         };
//     }, 2000);
//     return usuario;
// };

// const usuario = obtenerUsuario(1);
// console.log(usuario);


/**
 * La función anterior devuelve "undefined" en lugar de los datos del usuario. 
 * Esto se debe a que la llamada asincrónica a setTimeout tarda 2000 milisegundos 
 * (2 segundos) en ejecutarse, mientras que el valor de usuario se devuelve 
 * inmediatamente antes de que la llamada asincrónica haya finalizado.
 * 
 * Para solucionar este problema y obtener los datos del usuario correctamente, 
 * se utiliza una devolución de llamada (callback) o una promesa para manejar la asincronía. 
 * En este caso, utilizaré una promesa para solucionarlo.
 */



function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) {
          const usuario = { id: 1, nombre: 'John Doe' };
          resolve(usuario);
        } else reject('No se encontró el usuario');
      }, 2000);
    });
  }

  obtenerUsuario(1)
    .then((usuario) => {
        console.log(usuario); // datos del usuario
    })
    .catch((error) => {
        console.error(error); // Manejar el error si el usuario no se encuentra
    });




