let valores = [ 8, 1, 7, 4, 2, 9]

console.log(valores);//valores aparecerão sem formatação

/*maneira burra de se fazer
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]); 
console.log(valores[4]);
console.log(valores[5]);
*/

//maneira inteligente de se fazer e tradicional
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

/*criei uma variavel pos e ela vale 0, enquanto ela for menor que o tamanho
da minha array ela aumentará de valor e me retornara um console.log*/

/*Quando utilizamos a expressão valores[pos], estamos acessando o elemento do array 
"valores" que está na posição "pos". Ou seja, o valor de "pos" é atualizado a cada iteração 
do loop e, portanto, o elemento acessado no array também muda a cada iteração.

Por exemplo, na primeira iteração do loop, quando "pos" é igual a 0, a 
expressão valores[pos] retorna o primeiro elemento do array "valores". Na segunda 
iteração, quando "pos" é igual a 1, a expressão valores[pos] retorna o segundo elemento 
do array "valores", e assim por diante.*/

for(let pos in valores){
     console.log(` a posição ${pos} tem o valor ${valores[pos]}`);
}//para cada posição(indice) dentro da array valores irei mostrar o valores[pos] indice
 