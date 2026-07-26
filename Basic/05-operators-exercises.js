/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let variable1 = 8
let variable2 = 5
let total

console.log(variable1 + variable2)
console.log(variable1 - variable2)
console.log(variable1 * variable2)
console.log(variable1 / variable2)
console.log(variable1 % variable2)
console.log(variable1 ** variable2)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

variable1 +=3
console.log(variable1)
variable1 -=3
console.log(variable1)
variable1 *=2
console.log(variable1)
variable1 /=2
console.log(variable1)
variable1 %=2
console.log(variable1)
variable1 = 4
variable1 **=2
console.log(variable1)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3)
console.log("6" == 6)
console.log (5 != 10)
console.log (15 >= 6)
console.log (14 < 22)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 3)
console.log("6" === 6)
console.log (5 == 10)
console.log (15 <= 6)
console.log (14 > 22)

// 5. Utiliza el operador lógico and

console.log(22>15 || 16 !== 8)

// 6. Utiliza el operador lógico or

console.log(22>15 && 16 == 8)

// 7. Combina ambos operadores lógicos

console.log ("hola" == 0)
console.log(0 == false)
console.log(1 == true)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')


// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas