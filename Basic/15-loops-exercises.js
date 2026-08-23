/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i < 11; i++){
    console.log(`Voy en el número: ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let acumulado = 0
for (let i = 1; i < 101; i++){
    acumulado += i
}
console.log(`La suma de los primeros 100 números es: ${acumulado}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i < 51; i++){
    if (i%2 == 0){
        console.log(`${i}`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Juan", "Antonio", "Ramon", "Alfredo", "Gustavo", "Miguel", "Oscar"]
for(let valor in nombres){
    console.log(nombres[valor])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let vocales = "aeiou"
let palabra = "MARIPOSA voladora"
palabra = palabra.toLowerCase(palabra)
let numeroVocales = 0
for (let i = 0; i < palabra.length; i++){
    if(vocales.includes(palabra.charAt(i))){
        numeroVocales += 1
    }
}
console.log(numeroVocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [2, 6, 7, 10]
let producto = 1
for(let dato of numeros){
    producto *= dato  
}
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let i = 1
while (i < 11){
    console.log(`5 x ${i} = ${5 * i}`)
    i++
}

// 8. Usa un bucle para invertir una cadena de texto

let cadenaDeTexto = "horizonte"
let salida = ""
for (let i = cadenaDeTexto.length - 1; i>=0 ; i--){
    salida += cadenaDeTexto.charAt(i)
}
console.log(salida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibonacci = [0, 1]
for (let i = 2; i < 10; i++){
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1])
}
console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numerosVariados = [3, 56, 3, 2, 78, 120, 32, 2, 5, 8, 10]
let numerosMayoresDe10 = []
for (let valor of numerosVariados){
    if (valor > 10){
        numerosMayoresDe10.push(valor)
    } 
}
console.log(numerosMayoresDe10)
