/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

let miEdad = 13
if (miEdad > 64) {
    console.log ("Eres Jubilado")
} else if (miEdad > 18) {
    console.log(`Eres mayor de edad`)
} else {
    console.log(`Eres menor de edad`)
}

// 1. Imprime por consola tu nombre si una variable toma su valor

let miNombre = "Josean"
console.log(`Voy a escribir mi nombre: ${miNombre}`)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuarioCorrecto = "Pepe"
let contraseñaCorrecta = "123"
let usuario = "Pepe"
let contraseña = "123"

if (usuario == usuarioCorrecto && contraseña == contraseñaCorrecta) {
    console.log(`Acceso admitido`)
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -45

if(numero > 0){
    console.log("Numero positivo")
} else if (numero == 0){
    console.log("Numero igual a 0")
} else {
    console.log("Numero negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edadPersona = 6

if (edadPersona < 18){
    console.log(`No puedes votar, te faltan ${18 - edadPersona} años para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad = 20

let tipoDePersona = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(tipoDePersona)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 10

let estacion = ""

switch (mes){
    case 12:
    case 1:
    case 2:
        estacion = "invierno"
        break
    case 3:
    case 4:
    case 5:
        estacion = "primavera"
        break
    case 6:
    case 7:
    case 8:
        estacion = "verano"
        break
    case 9:
    case 10:
    case 11:
        estacion = "otoño"
        break
    default:
        estacion = "Mes no válido (debe ser de 1 a 12)"
}

console.log(`La estación actual es ${estacion}`)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

mes = 9
let diasMes

switch (mes){
    case 1:
        diasMes = 31
        break
    case 2:
        diasMes = 28
        break
    case 3:
        diasMes = 31
        break
    case 4:
        diasMes = 30
        break
    case 5:
        diasMes = 31
        break
    case 6:
        diasMes = 30
        break
    case 7:
        diasMes = 31
        break
    case 8:
        diasMes = 31
        break
    case 9:
        diasMes = 30
        break
    case 10:
        diasMes = 31
        break
    case 11:
        diasMes = 30
        break
    case 12:
        diasMes = 31
        break
    default:
        estacion = "Mes no válido (debe ser de 1 a 12)"
}

console.log(`El es ${mes} tiene ${diasMes} días`)


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Frances"
let saludo = ""
switch (idioma) {
    case "Español":
        saludo = "Buenos días"
        break
    case "English":
        saludo = "Good morning"
        break
    case "Frances":
        saludo = "Bonjour"
        break
    default:
        saludo = "El idioma elegido no ha sido contemplado..."
}

console.log(`Idioma: ${idioma}, Saludo: ${saludo}.`)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7