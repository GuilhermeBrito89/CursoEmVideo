let num = [1, 4, 3, 9, 8]
num[5] = 7//estou dizendo que no índice 5 receberá o valor 7
//acima adicionei o numero 7 ao meu array

num.push(5)/*estou pedindo para o numero 5 ser adicionado a array, dessa
maneira não estou dizendo qual a posiçao que o valor vai ir, somente 
quero que  adicione o valor depois do ultimo valor*/

num.length/* diz qual o tamanho do meu array, como neste array temos 7 elementos
a length é 7*/
console.log(num.length)

//num.sort() código organiza toda minha array em modo crescente

console.log(`meu array é: ${num}`);

console.log(`meu array tem ${num.length} posições`);

console.log(`o quarto valor do meu vetor é ${num[3]}`); 

/*imagine que eu queira mostar o console.log de toda a minha array mas sem colchetes. Tenho que 
fazer um console.log para cada posição?(console.log[0], etc...) Não. Para fazer isso trabalhamos
com estruturas de repetição*/

for (let pos = 0; pos<num.length; pos++){
    console.log(num[pos]);
}//maneira tradicional 

for( let pos in num){
    console.log(num[pos]);
}//maneira atualizada, simplificada e otimizada de se fazer
//essa sintaxe de for só funciona para arrays e objetos(array e objeto são a mesma coisa)
//para cada posição(indice) dentro da array num irei mostar o num[pos]


//num.indexOf(7)//ele ira procurar no vetor onde está o valor 7
//javascript, tem o valor 7 dentro do meu vetor? sim e está na posição(indice) 5

let indice = num.indexOf(8) 
//let indice = num.indexOf(100), o valor 100 não existe na array portanto mostrara que ele não foi encontrado
if(indice == -1){
    console.log('o valor não foi encontrado');
} else {
    console.log(`O valor 8 esta no indice ${indice}`);
}
/*quando colocamos o javascript para procurar e retornar o indice de um valor que não existe na array
ele irá sempre retornar no console.log o numero -1*/

/*aqui estou dizendo que se o valor não existir na array, ou seja, quando retornar -1, peço pra ele
retornar o console.log acima*/
