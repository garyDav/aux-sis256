// Declaración de variable
let base, altura
// Asignación de variable
base = 5
altura = 7

// Template string
/*
console.log(`Él área de un triángulo de base ${base} y altura ${altura} es: ${base*altura/2}`)
let parrafo = `Ésta es mi línea 1
         * esta es mi línea 2`
*/

/*function triangleArea(base, altura) {
  return base * altura / 2
}*/

const triangleArea = (base, altura) => base * altura / 2

console.log(`Él área de un triángulo de base ${base} y altura ${altura} es: ${triangleArea(base, altura)}`)

base = 15
altura = 25

console.log(`Él área de un triángulo de base ${base} y altura ${altura} es: ${triangleArea(base, altura)}`)

