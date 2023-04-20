## estrutura de repetição com variável de controle

for (inicio; teste; incr){
    bloco
}

primeiro é feita uma inicialização (inicio), depois um teste lógico (teste) se o teste lógico for true, então o bloco será executado, logo depois será executado o incremento (incr), depois  teste logico, depois o bloco, assim seguindo o fluxo...

na primeira passagem pelo for será feita uma inicialização e o teste, sendo o teste verdadeiro, será executado o bloco,
depois do bloco executado será feita a passagem pelo for novamente, será agora feito o incremento, depois o teste lógico, se teste logico for true o bloco será executado, assim, até que o teste lógico seja false

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

