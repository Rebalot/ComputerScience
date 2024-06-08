//Last in First Out. Los elementos se agregan de principio a fin y el ultimo es el primero en salir.
class Pila{
    constructor(){
        this.datos = []
    }

    /* push: Agregar un nuevo valor a la pila, ubicándolo al final de ésta */
    push(nuevoDato){
        this.datos.push(nuevoDato)
    }

    /* pop: Retorna el último valor, sacándolo de la pila */
    pop(){
        return this.datos.pop()
    }

    /* peek: Retornar el último valor, sin sacarlo de la pila*/
    peek(){
        return this.datos[this.datos.length - 1]
    }

    /* size: Retorna el número de elementos que contiene la pila */
    size(){
        return this.datos.length
    }
    isEmpty() {
        return this.datos.length === 0;
    }
    reverse(){
        return this.datos.reverse()

    }

    /* print : Muestra el contenido de la pila*/
    print(){
        console.log(this.datos);
    }
    // sort(){
    //     const alfabeticos = [];
    //     const numericos = [];

    //     this.datos.forEach(dato => {
    //         if (!isNaN(dato)) {
    //             numericos.push(parseFloat(dato));
    //         } else {
    //             alfabeticos.push(dato);
    //         }
    //     });

    //     // Ordenar elementos alfabéticos y numéricos
    //     alfabeticos.sort();
    //     numericos.sort((a, b) => a - b);

    //     // Fusionar los elementos ordenados
    //     const resultado = [...alfabeticos, ...numericos];

    //     // Reemplazar los datos de la pila con el resultado ordenado
    //     this.datos = resultado;

    //     return this.datos;
    // }
}




///////////////////////////
function invertirCaracteres(string) {
    let pila = new Pila();
    for (let i = 0; i < string.length; i++) {
        pila.push(string[i]);
    }

    let cadenaInvertida = "";
    while (!pila.isEmpty()){
        cadenaInvertida += pila.pop();
        // pila.print()
    }
    
    return cadenaInvertida;
}

console.log(invertirCaracteres('Holamundo'))





///////////////////////////
function paréntesisBalanceados(expresión) {
    let pila = new Pila();

    for (let i = 0; i < expresión.length; i++) {
        let caracter = expresión[i];
        if (caracter === '(') {
            pila.push(caracter);
        } else if (caracter === ')') {
            if (pila.isEmpty()) {
                return false; 
            }
            pila.pop(); 
        }
    }

    // Si la pila está vacía al final, significa que todos los paréntesis están balanceados
    return pila.isEmpty();
}

console.log(paréntesisBalanceados("(a+b)")); // true
console.log(paréntesisBalanceados("((a+b)")); // false
console.log(paréntesisBalanceados("((a+b")); // false
console.log(paréntesisBalanceados("((a+b))")); // true
console.log(paréntesisBalanceados(")a+b(")); // false



///////////////////////////
function decimalBinario(numero){

    let pila = new Pila();
    
    function residuo(valor){
        //Devuelve el residuo de la division del valor ingresado entre 2.
        return valor % 2
    }

    let division = numero
    while(division !== 0){
        pila.push(residuo(division))
        division = parseInt(division/2)
    } 

    let noBinario = ''
    while (!pila.isEmpty()){
        noBinario += pila.pop();
        // pila.print()
    }
    return noBinario
}

console.log(decimalBinario(60055))


///////////////////////////
let pila = new Pila();
pila.push(1)
pila.push(2)
pila.push(2)
pila.push("a")
pila.push(5)
pila.push(1)
pila.push(3)
pila.push("a")
pila.push("b")
pila.push(5)
pila.push("*")
pila.push("/")
pila.push("-")
pila.push("*")
pila.push("$")
pila.push("$")
pila.push("$")
pila.push(";")
pila.push(";")
pila.push("/")
pila.push("-")
pila.push("/")
pila.push("-")
eliminarDuplicados(pila)

function eliminarDuplicados(array){
    let arreglo = array.datos;
    arreglo.sort()
    console.log(arreglo)
    let unicos = [];

    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] !== arreglo[i+1]){
            unicos.push(arreglo[i])
            // console.log(unicos)
        }
    }
    array.datos = unicos;
}
console.log(pila)


/////////////////////////////
//agrego datos a mi pila
// pila.push(1)
// pila.push(2)
// pila.push(3)
// pila.push(4)
// pila.push(5)
// pila.push("Esta es una cadena")
// //imprimo mis datos
// pila.print()
// //eliminar datos
// let datoEliminado = pila.pop()
// //imprimo mis datos
// pila.print()

// console.log(`El dato eliminado es: ${datoEliminado}`);
