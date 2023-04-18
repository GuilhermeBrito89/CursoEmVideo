## estrutura de repetição com variável de controle

for (inicio; teste; incr){
    bloco
}

primeiro é feita uma inicialização (inicio), depois um teste lógico (teste) e depois um incremento (incr)

na primeira passagem pelo for será feita uma inicialização e o teste, sendo o teste verdadeiro, será executado o bloco,
depois do bloco executado será feita a passagem pelo for novamente, será agora feito o incremento novamente e tambem o teste lógico, novamente depois, fará o bloco, assim, até que o teste lógico seja false

posso colocar dentro de um for: um while, do while , if, switch, etc...

## estrutura de repetição com teste lógico no inicio

var c = 1
while (c <= 10){

    codigo
    c++

}


## codigo acima reescrito na estrutura de repetição com variável de controle 

for (var c=1; c<=10; c++){

    codigo
    
}

