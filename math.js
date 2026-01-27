export function promedio(numeros) {
  let acumulado = 0;

  for(let num of numeros) {
    acumulado += num;
  }

	return acumulado / numeros.length;
}

export function maximo(numeros) {
  let maximo = numeros[0];
  
  for(let num of numeros) {
    if (num > maximo) {
      maximo = num;
    }
  }

	return maximo;
}
