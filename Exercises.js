/*EJERCICIO 1
    Crea una función que imprima todos los números primos entre el 1 y el 100.
    Después, tendrá que imprimir la suma de todos esos
*/

function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

var sum = 0;

for (var i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
        sum += i;
    }
}

console.log("Sum:" + sum);

/* prime numbers would not be divisible by a number smaller than itself.*/


/*EJERCICIO 2
    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo: 
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/

let Array1 = [1,4,5,7] 
let Array2 = [2,1,5,1,1]
let result = []

function sumArrays(Arr, Arr2) {

    for (let i = 0; i < Array1.length; i++){
    result.push(Array1[i] + Array2[i]);
    }
}

    console.log(sumArrays(Array1, Array2));
   


/*EJERCICIO 3
    Un palíndromo es una palabra que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una palabra y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true
*/

let palindrome = "oso"

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome(palindrome));
/*EJERCICIO 4
    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.
    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'
*/

let arrayList = ['Pedro', 'Gon', 'Luis', 'Fran']

let newArrayList = arrayList.join(" / ");
console.log(newArrayList);

/*EJERCICIO 5
    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']
*/

let peopleList = [
    {id:2, name:'Pedro'},
    {id:1, name:'Juan'},
    {id:5, name:'Luis'},
    {id:3, name:'Gon'},
    {id:4, name:'Fran'} ]

function orderList(list){
    
    peopleList.sort(function(a, b){return a.id - b.id;});
    return order = peopleList;
   }

console.log(orderList(peopleList));