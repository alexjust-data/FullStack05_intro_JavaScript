

/**
 * ASINCRONIA
 * EL camino lineal se va a bifurcar, en segundo plano y van a ejecutarse
 * cuando ocurra un evento determinado. Cuando hace click en una web eso va a pasar
 * si quieres leer un archivo y sacar el texto, esa lectura en JS suele ser asincrono,
 * es decir el codigo no va a esperarnos irá haciendo.
 */

console.log("Hola");
// esto se ejecuta, pero de forma paralela
// no es que se cree otro hilo de ejecución
// si no que queda a la espera, cuando acaba o otro, se jecuta
setTimeout( () => {
    console.log("mundo");
}, 3000);
console.log("Fin")



console.log("Hola");
const cargarDatos = () => {
    setTimeout( () => {
        console.log("Datos cargados");
    }, 2000);
};

let loading = true;
cargarDatos();
loading = false;
console.log(loading);

// Hola
// false
// Datos cargados




/**
 * CONTROLAR LA ESPERA
 * acceder al valor
 */

/*
    1. callback -> cb
    2. Promesas
    3. Async / await
*/

/**
 * CALLBACK
 * - Que la funcióin cb se ejecute justo cuando termine el timeOut
 */
const cargarDatosCb = (cb) => {        // Le estamos pasando como parámetro una funcion anonima (cb) => {...} 
    setTimeout( () => {                // esta funcion se llamará cuando pasen 2 segundos
        console.log("Datos cargados1");
        cb("Datos cargados2");         // cb como si digo "const cb = (data) => console.log("Datos cargados");"
    }, 2000);
};
loading = true;
console.log(loading);

/**
 * "data" es un parámetro de la función anónima (data) => {...} que pasas como argumento a cargarDatosCb().
 * Cuando llamas cargarDatosCb( (data) => {...}), estás pasando una función de callback que será invocada 
 * dentro de cargarDatosCb(). Cuando se ejecuta esta línea cb("Datos cargados2"), estás invocando esa función 
 * de callback y le estás pasando la cadena de texto "Datos cargados2" como argumento.
 * 
 * El nombre data aquí es solo una elección de nombre de variable, podrías llamarlo de cualquier otra forma.
 */
cargarDatosCb( (data) => {
    console.log("data");
    console.log(data);      // este data es lo que manda cb("Datos cargados");
    loading = false;
    console.log(loading);
});




/**
 * CONTROL TEPORAL DE FUNCIONES
 */

const downloadUserData = (cb) => {
    setTimeout( () => {
        console.log("User data download");
        cb(); // esta función se ejecuta cuando se hayan descargados los datos de arriba, a los dos segundos
    }, 2000);
};
const processUserData = (callback) => {
    setTimeout( () => {
        console.log("User data processed")
        callback();
    }, 1000);
};
const displayUserDashboard = (callback) => {
    setTimeout( () => {
        console.log("User dashborad displayed")
        callback();
    }, 3000);
};

// downloadUserData();       -> descargamos datos
// processUserData();        -> procesamos datos
// displayUserDashboard();   -> display datos

/**
 * como la función callback(); de downloadUserData(); se ejecuta cuando ha terminado la descarga del usuario pasados 
 * los 2 segundos, podemos decir con 100% de seguridad que se han descargado los datos del usuario. Es decir, en este
 * bloque --> downloadUserData(); todo esto que estamos hablando ya ha termiando.
 * 
 * Entonces si eso ya ha terminado, podemos colocarle dentro la otra función para que se inicie después
 * para procesar ahora los datos descargados.
 * 
 * Cuando procese los datos, puedo añadir dentro el display de datos.
*/

downloadUserData( () => {
    processUserData( () => {
        displayUserDashboard( () => {
            console.log("Fin, ya se ve el usuario por la pantalla")
        });
    });
});


/**
 * PROMISES
 * en JS las promesas permiten envolver una parte de corto asincrono para crear una promesa y 
 * controlar su ejecucion. new Promise( () => {...} );
 */

const downloadUserData1 = () => {
    return new Promise( (resolve, reject) => {
        // este codigo será asincrono y yo he de decir la la promesa cuándo se resuelve
        setTimeout( () => {
            console.log("User data download");
            let user = {name: "test"};
            resolve(user);
        }, 2000);
    });
};


const processUserData1 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("User data processed");
            resolve();
        }, 1000);
    });
};


const displayUserDashboard1 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("User dashborad displayed");
            resolve();
        }, 3000);
    });
};

/**
 * en las promesas para saber si algo ha terminado tenemos los metodos
 * then, 
 * catch, 
 * finally
 */
console.log("Cargando ...");

// de esta forma no estamos utilizando bien las promesas
// fíjate que si se hace grande crecemos en diagonal
downloadUserData1()
    .then( () => {
       processUserData1()
        .then ( () => {
            displayUserDashboard1()
                .then( () => {
                    console.log("Fin1, ya se ve el usuario por pantalla");
                });
        }); 
});

console.log("Cargando1 ...");
//podemos encadenarlas, así cuando return uno... comienza lo otro.
downloadUserData1()
    .then( () => {
       return processUserData1();
    }).then( () => {
        return displayUserDashboard1();
    }).then( () => {
        console.log("Fin2, ya se ve el usuario por pantalla");
    });

//variaciones
downloadUserData1()
    .then( () => processUserData1)
    .then( () => displayUserDashboard1)
    .then( () => {
        console.log("Fin2, ya se ve el usuario por pantalla");
    });

//variaciones... quizás este es mas facil de leer
downloadUserData1()
    .then(processUserData1)
    .then(displayUserDashboard1)
    .then( () => {
        console.log("Fin2, ya se ve el usuario por pantalla");
    });


// CAPTURANDO ERRORES
downloadUserData1()
    .then( () => {
       return processUserData1();
    }).then( () => {
        return displayUserDashboard1();
    }).then( () => {
        console.log("Fin2, ya se ve el usuario por pantalla");
    }).catch(() => {
        console.log("CATCH!!!")
    });



/**
 * ASYNC / AWAY
 * - esta es más fácil de leer
 */

const main = async () => {
    console.log("Cargando1 ...");
    await downloadUserData1();
    await processUserData1();
    await displayUserDashboard1();
    console.log("Fin2, ya se ve el usuario por pantalla");
};

main();

// con varibles
const main1 = async () => {
    console.log("Cargando1 ...");
    const user = await downloadUserData1();
    console.log(user);
    await processUserData1();
    await displayUserDashboard1();
    console.log("Fin2, ya se ve el usuario por pantalla");
};

main1();

// captura de errors
const main2 = async () => {
    try {
        console.log("Cargando1 ...");
        const user = await downloadUserData1();
        console.log(user);
        await processUserData1();
        await displayUserDashboard1();
        console.log("Fin2, ya se ve el usuario por pantalla");
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Ejecutar siempre");
    }
};

main2();


// captura de errors throw 
const main3 = async () => {
    try {
        console.log("Cargando1 ...");
        // funciona como un return, en cuando el codigo vea un error el resto no se ejecuta
        throw new Error("Error cargando la página...")
        const user = await downloadUserData1();
        console.log(user);
        await processUserData1();
        await displayUserDashboard1();
        console.log("Fin2, ya se ve el usuario por pantalla");
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Ejecutar siempre");
    }
};

main3();


// ejemplo
const getUserData = async (id) => {
    try {
      const res = await fetch("https://dummyjson.com/users?limit=100");
      if (!res.ok) throw new Error("Error fetching user data.");
      console.log("Users data fetched.");
      console.log(res);
  
      const data = await res.json();
      if (!data) throw new Error("No user data loaded.");
      console.log("Users data loaded.");
      console.log(data);
  
      // const { users } = data;
      const users = data.users;
      console.log("All users:");
      console.log(users);
  
      const myUser = users.find((user) => user.id === id);
      console.log("My user:");
      console.log(myUser);
    } catch (e) {
      console.error(e.message);
    }
  };
  
  getUserData(77);