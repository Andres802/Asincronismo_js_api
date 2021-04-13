/**
 * Aqui la promesa se ejecuta al cargar el archivo
*/
const somethingWillHapped = new Promise( (resolve, reject) => {
    if (true) {
        console.log('Hey dude!');
        resolve('Hey!');
    } else {
        reject('Whoops!');
    }
});

/**
 *Aqui la promesa no se ejecuta hasta que se llame a la funcion
*/
const somethingWillHapped2 = () => {
    return new Promise( (resolve, reject) => {
        if (false) {
            console.log('Hey dude!');
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
}