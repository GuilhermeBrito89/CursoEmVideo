var agora = new Date()
var diaSemana = agora.getDay()//pedindo para mostar dia da semana
// console.log(diaSemana);//quando rodo esse codigo o numero 4 é me dado, dias começam a ser contados com numero 0

/*
    0 -Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado

*/

// diaSemana = 6 forcei o dia pra ser Sábado

switch (diaSemana){
    case 0:
        console.log('Domingo');
        break
    case 1:
        console.log('Segunda');
        break
    case 2:
        console.log('Terça');
        break
    case 3:
        console.log('Quarta');
        break
    case 4:
        console.log('Quinta');
        break
    case 5:
        console.log('Sexta');
        break
    case 6:
        console.log('Sábado');
        break
    default:
        console.log('[ERROR] dia inválido');
        break//opcional
}

//eu poderia fazer esse codigo com if e else mas teria de escreever demais, portanto o switch é a melhor opção
/*no switch não tem como dizer tipo: quero dia  da semana entre 0 e 8, nesse caso que são intervalos é melhor o uso do if
e else, swicth só funciona com numeros inteiros e caracteres(strings)*/