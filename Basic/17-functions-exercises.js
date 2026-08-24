/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(numero1, numero2){
    return numero1 + numero2
}
console.log(suma(3, 8))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function valorMayor(array){
    let mayor = 0
    for (let valor of coleccionDeNumeros){
        if (valor > mayor){
            mayor = valor
        }
    }
    return mayor
}

let coleccionDeNumeros = [2, 3, 45, 5, 66, 7, 2, 14, 26, 32, 47]
console.log(`El mayor valor que hay en coleccionDeNumeros es ${valorMayor(coleccionDeNumeros)}`)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numeroDeVocales (cadena){
    let vocales = "aeiou"
    cadena = cadena.toLowerCase(cadena)
    let numeroVocales = 0
    for (let i = 0; i < cadena.length; i++){
        if(vocales.includes(cadena.charAt(i))){
            numeroVocales += 1
        }
    }
    return numeroVocales
}

let ejemplo1 = "El bosque es peligroso"
console.log(`El numero de vocales que hay en "${ejemplo1}" es ${numeroDeVocales(ejemplo1)}`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas


function convertirAMayusculas (array){
    let palabrasMayusculas = []
    for (let word of palabrasMinusculas){
        palabrasMayusculas.push(word.toUpperCase())
    }
    return palabrasMayusculas
}
let palabrasMinusculas = ["mesa", "plato", "cocina", "lechuga", "aguacate"]
console.log(convertirAMayusculas(palabrasMinusculas))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numeroPrimo(numero){
    for (let i = 2; i < numero; i++){
        if (numero % i == 0){
            return false
        }
    }
    return true
}

let numero = 104651
if (numeroPrimo(numero)){
    console.log(`El numero ${numero} es primo`)
} else {
    console.log(`El numero ${numero} es no es primo`)
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function palabrasComunes(array1, array2){
    let arrayPalabrasComunes = []
    for(let valor1 of array1){
        for (let valor2 of array2){
            if (valor1 == valor2){
                arrayPalabrasComunes.push(valor1)
            }
        }
    }
    return arrayPalabrasComunes
}

let array1 = ["piso", "mesa", "carpeta", "tornillo", "zapato", "boligrafo", "calcetin"]
let array2 = ["pared", "clavo", "mesa", "boligrafo", "calcetin", "sandalia", "gorro"]
console.log(`El array de palabras comunes es: ` )
console.log(palabrasComunes(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaDePares(array){
    let importeAcumulado = 0
    for (let valor of array){
        if (valor%2 == 0){
            importeAcumulado += valor
        }
    }
    return importeAcumulado
}

let miArray = [2, 3, 4, 5, 6, 7, 9, 10]
console.log(`la suma de los numeros pares de este array: ${miArray}`)

console.log(`es ${sumaDePares(miArray)}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevarAlCuadrado(array){
    let arraySalida = []
    for (let valor of array){
        arraySalida.push(valor ** 2)
    }
    return arraySalida
}

let arrayEntrada = [2, 3, 4, 5, 6, 7]
console.log(elevarAlCuadrado(arrayEntrada))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function inversionDePalabras(miString){
    const arrayEntrada = miString.split(' ')
    console.log(arrayEntrada)
    console.log(arrayEntrada.length)
    let arraySalida = []
    for (let i = arrayEntrada.length - 1;i > -1;i--){
        arraySalida.push(arrayEntrada[i])
    }
    return arraySalida
}
let frase = "Caminaba caperucita por el bosque..."
console.log(inversionDePalabras(frase))

// 10. Crea una función que calcule el factorial de un número dado

function factorialDeNumero(numero){
    let acumulado = 0
    if (numero == 0){
        return 0
    } else if (numero == 1){
        return 1
    } else{
        acumulado = 1
        for(let i = 2; i <= numero; i++){
            acumulado *= i
        }
        return acumulado
    }
}
console.log(factorialDeNumero(100))
