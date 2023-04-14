## Condição Aninhadas (Ninho - um dentro do outro)

É uma condição composta com outras condições dentro dela

if (cond1){
    bloco1
} else {
    
    if (cond2){
        bloco2
    } else {
        bloco3
    }

}

# explicação :
se a condição 1 for true então o bloco1 sera executado mas se for false será rodado entao a condição 2, se a condição 2 for true bloco2 sera executado mas se for false bloco3 sera executado. No lugar de bloco 3 pode ser adicionado outro if e else fazendo assim mais ninhos

## Condições Múltiplas

servem para um valor fixo, alem da possibilidade do true e do false, essas condiçoes possuem possibilidade de
outros valores, que sao fixos(se for determinado um valor especifico faz um bloco, se for outro valor faz outro bloco, etc...)

switch (expressão) {

    case valor 1:

        bloco
        break

    case valor 2:

        bloco
        break

    case valor 3:

        bloco
        break

    default:

        bloco
        break

}

se a expressão for o valor 1 seu bloco sera executado, se valor for o 2, o bloco do valor 2 sera executado, etc...
o default é opcional, default terá um bloco que será executado se a expressão não tiver nenhum dos valores denominados(default é o else)

break é sintaxe do switch, o break que fica no default é opcional

no switch não tem como dizer na expressão tipo: quero dia  da semana entre 0 e 8, nesse caso que são intervalos é melhor o uso do if
e else, swicth só funciona com numeros inteiros e caracteres(strings)

