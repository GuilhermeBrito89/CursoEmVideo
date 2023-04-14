var agora = new Date()//chamando a hora do sistema
var hora = agora.getHours()//getHours seleciona a hora atual dos sistema, tem como pegar tamebm data do sistema, etc
console.log(`agora são exatamente ${hora} horas`);
if (hora < 12){
    console.log('Bom dia');
} else if (hora <= 18){
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}