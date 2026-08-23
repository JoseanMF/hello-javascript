/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animalesArray = ["perro", "gato", "conejo", "pajaro", "serpiente"]
console.log(animalesArray)

// 2. Añade dos más. Uno al principio y otro al final

animalesArray.push("cigüeña")
console.log(animalesArray)
animalesArray.unshift("cangrejo")
console.log(animalesArray)

// 3. Elimina el que se encuentra en tercera posición

let animalEliminado = animalesArray.splice(2,1)
console.log (`Animal eliminado: ${animalEliminado}`)
console.log (animalesArray)

// 4. Crea un set que almacene cinco libros

let libreria = new Set([
    "El señor de los anillos",
    "El amor en los tiempos del colera",
    "Los pilares de la tierra",
    "Platero y yo",
    "Un mundo sin fin"
])

console.log(libreria)


// 5. Añade dos más. Uno de ellos repetido

libreria.add("100 años de soledad")
libreria.add("Platero y yo")
console.log(libreria)

// 6. Elimina uno concreto a tu elección

let resultado = libreria.delete("Platero y yo")
console.log(resultado)
console.log(libreria)

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])

console.log(meses)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

let existe5 = meses.has(5)
console.log(existe5)
console.log(meses.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("Verano", ["Junio", "Julio", "Agosto"])
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let miArray = ["Juan", "juan@gmail.com", 64, 64]
console.log(miArray)

let miSet = new Set(miArray)
console.log(miSet)

