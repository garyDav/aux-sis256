/*
n=3
  *
 * *
*   *
 * *
  *
n=5
1234*
123*1*
12*123*
1*12345*
*1234567*
1*12345*
12*123*
123*1*
1234*
*/

function rombo(n) {
  let espacioIz=''
  let espacioIn=''
  let numEspacioIn = 1
  // Primer asterisco
  for (let i = n; i > 0; i--)
    espacioIz += '-'
  console.log(espacioIz+'*')

  // Cuerpo del Rombo
  for (let i = n-1; i > 0; i--) {
    // Resetear valores
    espacioIz=''
    espacioIn=''

    // Espaciado Izquierdo
    for (let j = 0; j < i; j++) {
      espacioIz += '_'
    }

    // Espaciado Interno
    for (let j = 0; j < numEspacioIn; j++)
      espacioIn += ' '
    numEspacioIn += 2
    console.log(espacioIz+'*'+espacioIn+'*')
  }

  numEspacioIn -= 4;
  for (let i = 0; i < n-2; i++) {
    espacioIz=''
    espacioIn=''
    for (let j = 0; j <= i+1; j++) {
      espacioIz += '_'
    }
    for (let j = 0; j < numEspacioIn; j++)
      espacioIn += ' '
    numEspacioIn -= 2
    console.log(espacioIz+'*'+espacioIn+'*')
  }

  espacioIz=''
  for (let i = n; i > 0; i--)
    espacioIz += '-'
  console.log(espacioIz+'*')
}

rombo(5);
rombo(8);
rombo(3);
rombo(10);

