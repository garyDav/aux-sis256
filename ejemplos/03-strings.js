/*
 * 1. Si la palabra termina con 'ar' se le quitan estas dos letras
 * EJ: platzom('Programar') => Program
 *
 * 2. Si la palabra inicia con Z, se le añade 'pe' al final
 * EJ: platzom('zarpar') => zarppe, por la regla 1
 *
 * 3. Si la palabra traducida tiene 10 o mas letras,
 * se debe partir en dos por la mitad y unir con un quión medio
 * EJ: platzom('abecedario') => abece-dario
 *
 * 4. Por último, si la palabra original es un palíndromo, 
 * ninguna regla anterior cuenta y se devuelve la misma palabra pero
 * intercalado letras mayúsculas y minúsculas
 * EJ: platzom('sometemos') => SoMeTeMoS
*/

function platzom ( str ) {
  let translation = str
  // Regla 4
  const reverse = str => str.split('').reverse().join('')
  
  function minMay ( str ) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i=0; i<length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if ( str == reverse(str) )
    return minMay(str)

  // Regla 1
  if ( str.toLowerCase().endsWith('ar') )
    translation = str.slice(0, -2)

  // Regla 2
  if ( str.toLowerCase().startsWith('z') )
    translation += 'pe'

  // Regla 3
  let length = translation.length
  if ( length > 9 ) {
    const firstHalf = translation.slice(0, Math.round(length/2))
    const secondHalf = translation.slice(Math.round(length/2))
    translation = `${firstHalf}-${secondHalf}`
  }

  return translation
}

console.log('Programar', platzom('Programar'))
console.log('Zorro', platzom('Zorro'))
console.log('Zarpar', platzom('Zarpar'))
console.log('Abecedario', platzom('Abecedario'))
console.log('sometemos', platzom('sometemos'))

