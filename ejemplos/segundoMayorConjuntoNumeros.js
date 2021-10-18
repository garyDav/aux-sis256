// Encontrar el segundo número mayor de un conjunto de número leído por teclado
misNumeros = []
cantidad = Number(prompt('Cantidad de números: '))
for (let i=0;i<cantidad;i++) {
    num = Number( prompt('Número '+(i+1)+': ') )
    misNumeros.push(num)
}
aux=0
for (let i=0;i<cantidad-1;i++) {
    for (let j=i+1;j<cantidad;j++) {
        if (misNumeros[i] < misNumeros[j]) {
            aux = misNumeros[i]
            misNumeros[i] = misNumeros[j]
            misNumeros[j] = aux
        }
    }
}

console.log('El segundo numero mayor es: '+misNumeros[1])

