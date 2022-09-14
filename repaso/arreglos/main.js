let helados=['Banana Split','Menta Granizada','Cereza','Dulce de Leche','Maracuya','Vainilla','Frutos Rojos','Pistacho']

//Como obtener la longitud de un arreglo
let longitud=helados.length
console.log('Longitud: '+longitud)

//Como obtengo el ultimo elmento de un codigo(array)
let ultimo=helados[longitud-1]
console.log('Ultimo Elemento: '+ultimo)

//Como agrego un elemento al final del arreglo
helados.push('Crema Rusa')
console.log(helados)

//Como elimino el ultimo elemento de un arreglo
helados.pop()
console.log(helados)

//Como agrego un elemento al inicio de un arreglo
helados.unshift('Marroc')
console.log(helados)

//Como eliminar el primer elemento de un arreglo
helados.shift()
console.log(helados)

//Como obtener el indice(posicion) de un elemento
let indice_cereza=helados.indexOf('Cereza')
console.log('Indice de cereza: '+indice_cereza)
console.log(helados[indice_cereza])

//Como elimino un elemento conociendo su indice
helados.splice(indice_cereza,1)
console.log(helados)

//Como agrego mas de un elemento dentro de un arreglo
helados.splice(1,0,'Dulce de Leche')
console.log(helados)