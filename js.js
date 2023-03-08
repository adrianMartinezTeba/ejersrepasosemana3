// Ejercicios Condiciones y Objetos/Arrays

// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':
ordenador = {
    marca: 'Asus',
    tipo: 'portátil',
    perifericos: {
        touchpad: true
    },
    almacenamiento: {
        discos: ['SSD']
    },
    procesador: {
        velocidad: '2.5 GHz'
    }

}
// TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 2
if (ordenador.marca === "Asus") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 3
if (ordenador.tipo === "portátil") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 4
if (ordenador.perifericos.touchpad === true) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 5
if (ordenador.almacenamiento.discos[0] === "SSD") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (ordenador.procesador.velocidad === "2.5 GHz") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// Ejercicios Bucles
// Imprimir los números del 21 al 34 en la consola.
for (let i = 21; i <= 34; i++) {
    console.log(i)
}
// Sumar los números del 1 al 10 y mostrar el resultado en la consola.
let suma = 0
for (let i = 1; i <= 10; i++) {
    suma += i
}
console.log(suma)
// Dado un array de números, imprimir en la consola la suma de todos los números.
const arrayNumeros = [2, 5, 23, 43, 1, 3, 5, 6]
let sumaArray = 0
for (const numero of arrayNumeros) {
    sumaArray += numero
}
console.log(sumaArray)
// Dado un número, encontrar su factorial.
const numfactorial = 5
let factorial = 1
for (let i = 1; i <= numfactorial; i++) {
    factorial *= i

}
console.log(factorial)
// Dado un array de números, imprimir en la consola solo los números impares.
for (const numeros of arrayNumeros) {
    if (numeros % 2 !== 0) {
        console.log(numeros)
    }
}
// Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.
let personas = [
    {
        nombre: 'carlos',
        edad: 15
    },
    {
        nombre: 'juan',
        edad: 20
    },
    {
        nombre: 'pablo',
        edad: 98
    }
]
for (const persona of personas) {
    if (persona.edad >= 18) {
        console.log(persona.nombre)
    }
}
// Dado un número, imprimir en la consola si es primo o no.
function primo(x) {
    for (let i = 2; i < x; i++) {
        if (x % 1 === 0 && x % x == 0 && x % i === 0) {
            return 'no es primo'
        } else {
            return 'es primo'
        }
    }
}
// function esPrimo(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

console.log(primo())
// Utiliza la siguiente array para resolver los próximos ejercicios:



let animales = [
    {
        nombre: "León",
        especie: "Felino",
        edad: 6,
    },
    {
        nombre: "Cebra",
        especie: "Herbívoro",
        edad: 4,
    },
    {
        nombre: "Tigre",
        especie: "Felino",
        edad: 3,
    },
    {
        nombre: "Elefante",
        especie: "Herbívoro",
        edad: 8,
    },
    {
        nombre: "Jirafa",
        especie: "Herbívoro",
        edad: 5,
    },
    {
        nombre: "Oso",
        especie: "Omnívoro",
        edad: 2,
    },
    {
        nombre: "Pingüino",
        especie: "Ave",
        edad: 1,
    },
];



// Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.
let felinosmayoresde4 = []
for (const felinostop4 of animales) {
    if (felinostop4.especie === 'Felino' && felinostop4.edad > 4) {
        felinosmayoresde4.push(felinostop4)
    }
}
console.log(felinosmayoresde4)
// Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.
const herviborosEdadPar = []
for (const herviborosypar of animales) {
    if (herviborosypar.especie === 'Herbívoro' && herviborosypar.edad % 2 === 0) {
        herviborosEdadPar.push(herviborosypar)
    }
}
console.log(herviborosEdadPar)
// Crea un array con los animales que son omnívoros o aves y menores de 3 años. No utilices el método filter de las arrays y muéstralo por consola.
const omnivorosOavesMen3años = []
for (const omnivorosetc of animales) {
    if (omnivorosetc.especie === 'Omnívoro' || omnivorosetc.especie === 'Ave' && omnivorosetc.edad < 3) {
        omnivorosOavesMen3años.push(omnivorosetc)
    }

}
console.log(omnivorosOavesMen3años)
// Crea un array con los animales que su especie empieza por "H". No utilices el método filter de las arrays y muéstralo por consola.
const animalesEmpiezanH = []
for (const empiezanh of animales) {
    if (empiezanh.especie[0] === 'H') {
        animalesEmpiezanH.push(empiezanh)
    }

}
console.log(animalesEmpiezanH)
// Crea un array con los animales cuyo nombre tenga más de 4 letras y su especie sea felino o herbívoro. No utilices el método filter de las arrays y muéstralo por consola.
const animalesdificil = []
for (const animal of animales) {
    if (animal.nombre.length > 4 && animal.especie === 'Felino' || animal.especie === 'Herbívoro') {
        animalesdificil.push(animal)
    }
}
console.log(animalesdificil)
// Ejercicios Funciones

// Crea una función llamada eliminarDuplicados(array) que reciba como parámetro un array de elementos y devuelva un nuevo array con los elementos únicos, es decir, sin elementos duplicados. Puedes utilizar un ciclo for...of para recorrer el array original.
// //salida
// eliminarDuplicados([1, 2, 3, 3, 4, 5, 5, 6]); // Devuelve [1, 2, 3, 4, 5, 6]
// eliminarDuplicados(["hola", "adios", "hola", "hasta", "luego"]); // Devuelve ["hola", "adios", "hasta", "luego"]
const arraynuevo = [1, 2, 2, 3, 3, 4, 5, 6]
function eliminarDuplicados(array) {
    const arraySinDuplicados = [];
    for (const elemento of array) {
        if (!arraySinDuplicados.includes(elemento)) {
            arraySinDuplicados.push(elemento);
        }
    }
    return arraySinDuplicados;
}
console.log(eliminarDuplicados(arraynuevo))
// Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.
// sumarElementos([1, 2, 3, 4, 5]); // Devuelve 15
// sumarElementos([-5, 10, -15, 20]); // Devuelve 10
function sumarElementos(array) {
    let suma = 0
    for (const numero of array) {
        suma += numero
    } return suma

}
console.log(sumarElementos([-5, 10, -15, 20]));
//lo que ha dicho kat Crea una función en contarCaracteres(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cantidad total de caracteres que hay en todas las cadenas juntas. Puedes utilizar un ciclo for...of para recorrer el array y contar los caracteres.

function contarCaracteres(array) {
    let numCarar = 0
    for (const palabra of array) {
        numCarar += palabra.length
    }return numCarar

}
console.log(contarCaracteres(["JavaScript","es", "genial"]));
// contarCaracteres(["Hola", "Mundo"]); // Devuelve 9
// contarCaracteres(["JavaScript", "es", "genial"]); // Devuelve 18

//   Crea una función llamada numeroMasGrande(array) que reciba como parámetro un array de números y devuelva el número más grande de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar el número más grande.
function numeroMasGrande(array) {
    let numcomparacion = 0
    for (const numero of array) {
        if (numero > numcomparacion) {
            numcomparacion = numero
        }
    }return numcomparacion
}
console.log(numeroMasGrande([10, -5, 20, -15]))
// numeroMasGrande([1, 2, 3, 4, 5]); // Devuelve 5
// numeroMasGrande([10, -5, 20, -15]); // Devuelve 20


// Crea una función llamada cadenaMasLarga(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cadena más larga de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar la cadena más larga.

function cadenaMasLarga(array) {
    let compararlongitud1 =''
    for (const palabra of array) {
        if (palabra.length>compararlongitud1.length ) {
            compararlongitud1 = palabra
        }
    }return compararlongitud1
}

console.log(cadenaMasLarga(["JavaScript", "es", "genial",'hoooooooooa']))
// cadenaMasLarga(["Hola", "Mundo"]); // Devuelve "Mundo"
// cadenaMasLarga(["JavaScript", "es", "genial"]); // Devuelve "JavaScript"
// Ejercicio Suscripción a Newsletter
// Crea una vista "Suscripción a Newsletter" que contenga un formulario con los siguientes campos: Nombre, Dirección de correo electrónico, Intereses (checkboxes) y Tipo de suscripción (radio buttons). El objetivo de este formulario es recoger la información del usuario y guardarla en localStorage.
// Para garantizar que se recopilan todos los datos necesarios, se debe implementar una validación que obligue al usuario a completar todos los campos del formulario. También es importante realizar una validación de la dirección de correo electrónico, para asegurarse de que se ha introducido una dirección válida.
// Si alguna de las validaciones no se cumple, se debe mostrar un mensaje de error durante 3 segundos y luego desaparecer. Si el usuario completa correctamente todos los campos del formulario, se debe mostrar un mensaje de éxito durante 3 segundos y redirigir a la vista de confirmación de suscripción. Para mostrar los mensajes, se pueden utilizar los alertas de Bootstrap.

// Ejercicio mostrar Newsletter

// Crea una vista Newsletter y muestra en esa página la Newsletter que habías guardado previamente en el localStorage
// Ejercicio Newsletter nivel 2

// Modifica tu formulario de Newsletter para que puedas guardar varias newsletters. Cada vez que escribas una nueva newsletter, guárdala en un array junto con las anteriores.
// Después, muestra todas las newsletters en la vista de Newsletter, de forma que se puedan leer todas ellas.
