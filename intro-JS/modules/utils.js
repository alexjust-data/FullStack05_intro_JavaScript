console.log("utils");

// SUMANDO LOS SCORES --> exportanto la funcion
export const sumScores = (courses) => {
    return courses.reduce((acum, {score}) => {
        const resultado = acum + score;
        return resultado;
    }, 0);
};


// module.extort.suma = (a,b) => a + b;
export const suma = (a, b) => a+b;

// otra forma de exporta
const calculadora = () => {
    let initialNumber = 0;

    const sumar = (number) => (initialNumber += number);
    const restar = (number) => (initialNumber -= number);
    const multiplicar = (number) => (initialNumber *= number);
    const dividir = (number) => (initialNumber /= number);

    return {
        sumar,
        restar,
        multiplicar,
        dividir
    };
};
// no nodejs :(
export default calculadora;