export function promedio(numeros) {
  if(numeros.length === 0) return 0;
  
  let acumulado = 0;

  for(let num of numeros) {
    acumulado += num;
  }

	return acumulado / numeros.length;
}

export function maximo(numeros) {
  if(numeros.length === 0) return 0;
  
  let maximo = numeros[0];
  
  for(let num of numeros) {
    if (num > maximo) {
      maximo = num;
    }
  }

	return maximo;
}
