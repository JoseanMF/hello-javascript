/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

console.log ("hola amigo, " + "veo que sigues trabajando...")


// 2. Muestra la longitud de una cadena de texto

let mensaje = "Cuando caminaba caperucita por el bosque..."
console.log(mensaje.length)

// 3. Muestra el primer y último carácter de un string

console.log(mensaje[0])
console.log(mensaje[42])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(mensaje.toUpperCase())
console.log(mensaje.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

console.log (`Vamos a crear una cadena de texto
              de varias líneas, concretamente de 
              3 líneas`)

// 6. Interpola el valor de una variable en un string

let miNombre = "Josean"
console.log(`${miNombre}, tienes que esforzarte más en la programación`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
// esto es una expresión regular: / /g. indica que se va a buscar todos los espacios en blanco y se van a sustituir por un -.

console.log("Reemplazar espacion por guiones: " + mensaje.replace(/ /g,"-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log("Ver si mensaje contiene la palabra caperucita: " + mensaje.includes('caperucita'))

// 9. Comprueba si dos strings son iguales

console.log(miNombre == "Antonio")

// 10. Comprueba si dos strings tienen la misma longitud

console.log(miNombre.length == mensaje.length)
