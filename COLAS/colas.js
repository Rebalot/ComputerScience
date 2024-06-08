//First In First Out. Se agregan de principio a fin y el primero que fue ingresado es el primero en salir. 
class Cola{
    constructor(){
        this.datos = []
    }

    /*enqueue: Agrega un nuevo elemento a la cola, situándolo al final */
    enqueue(nuevoDato){
        this.datos.push(nuevoDato)
    }

    /* dequeue: Retorna el primer elemento de la cola, quitándolo de ésta */
    dequeue(){
        return this.datos.shift()
    }

    /* peek: Retorna el primer elemento de la cola, sin quitarlo */
    peek(){
        return this.datos[0]
    }

    /* size: Retorna el número de elementos que contiene la cola */
    size(){
        return this.datos.length
    }

    /* print: Muestra el contenido de la cola */
    print(){
        console.log(this.datos);
    }
    reverse(){
        return this.datos.reverse()
    }
    isEmpty(){
        return this.datos.length === 0
    }
}


async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Implemento una cola
// let queue = new Cola()

//Agrego elementos
// queue.enqueue("José José - Gavilán o paloma")
// queue.enqueue("Coldplay - Viva la vida")
// queue.enqueue("Luis Miguel - La media vuelta")
// queue.enqueue("Black Clover - Opening 3")

// //Imprimo elementos
// queue.print()

// //Eliminar elementos
// let cancionReproducida = queue.dequeue()

// console.log(`La cación que se está reproduciendo es... ${cancionReproducida}`);
// queue.print()

// invertirCola(queue)
// function invertirCola(array){
//     let arreglo = array.datos
//     arreglo.reverse()
// }
// queue.print()

// const colaImpresion = new Cola()
// colaImpresion.enqueue('Documento1')
// colaImpresion.enqueue('Documento2')
// colaImpresion.enqueue('Documento3')
// colaImpresion.enqueue('Documento4')
// colaImpresion.enqueue('Documento5')

// impresion(colaImpresion)
// async function impresion(queue){
//     
//     while(queue.size() !== 0){
//         const documentoActual = queue.dequeue()
//         console.log(`Imprimiendo... ${documentoActual}`)
//         console.log('Cola de impresión:', queue.datos)
//         await delay(3000);
//     }
    
// }


const palindromo = new Cola()
palindromo.enqueue('anitalavalatinax')

comprobarPalindromo(palindromo)
function comprobarPalindromo(cola){
    let array = cola.datos,
        comprobacion = new Cola(),
        comprobacionCopy = new Cola(),
        string1 = '',
        string2 = '',
        palabra;
    if(array.length === 1){
        palabra = array[0]
    }else{
        palabra = ''
        for (let i = 0; i < array.length; i++) {
            palabra += array[i]
        }
    }

    for (let i = 0; i < palabra.length; i++) {
        let caracter = palabra[i]
        comprobacion.enqueue(caracter)
    }
    //comprobaciónCopy es el texto al revés
    comprobacionCopy.datos = [...comprobacion.datos]
    comprobacionCopy.reverse()
    
    for (let i = 0; i < comprobacion.datos.length; i++) {
        string1 += comprobacion.datos[i]
        string2 += comprobacionCopy.datos[i]
    }

    console.log(string1)
    console.log(string2)

    if(string1 === string2){
        console.log('Es un palíndromo')
    }else{
        console.log('No es un palíndromo')
    }
}

const ColaX = new Cola(),
    ColaY= new Cola();

ColaX.enqueue('XD')
ColaX.enqueue(1)
ColaY.enqueue('XF')
ColaY.enqueue(2)

const ColaXY = mergeDosColas(ColaX, ColaY);
console.log(ColaXY)
console.log(ColaX)
console.log(ColaY)

function mergeDosColas(cola1, cola2){
    const colaMerge = new Cola();

    while (!cola1.isEmpty()) {
        colaMerge.enqueue(cola1.dequeue());
    }

    while (!cola2.isEmpty()) {
        colaMerge.enqueue(cola2.dequeue());
    }

    return colaMerge
}

