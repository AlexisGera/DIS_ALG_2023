console.log(ElementosDominantes([1, 21, 4, 7, 5])); 
console.log(ElementosDominantes([5, 4, 3, 2, 1]));

function encontrarElementosDominantes(arreglo) {
  if (arreglo.length === 0) {
    return []; }
 
     const elementosDominantes = [];
     let maximo = arreglo[arreglo.length - 1];

  for (let i = arreglo.length - 2; i >= 0; i--) 
  { if (arreglo[i] > maximo) 
    {
elementosDominantes.unshift(arreglo[i]);
      maximo = arreglo[i]; }}

  elementosDominantes.push(arreglo[arreglo.length - 1]);

  return elementosDominantes;
}