function verificar (){

    var data = new Date()
    var ano = data.getFullYear()
    var formularioano = document.getElementById('txtano')//id do input que recebe o ano
    var res = document.getElementById('res')

    if(formularioano.value.length == 0 || Number(formularioano.value) > ano ){

        window.alert('Verifique os dados e tente novamente!')

    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioano.value)
        var gênero = ''
        var img = document.createElement('img')//criando campo de img pelo js (poderia criar pelo html <img>)
        img.setAttribute('id', 'foto')//dei um id com nome foto para o campo de img que criei(mesma coisa de dar id peo html)

        if(fsex[0].checked){//se bolinha masculina selecionada gênero sera homem

            gênero = 'Homem'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'bebe-m.jpg')//esse codigo diz para adicionar um src para o campo img
            } else if (idade < 18){
                //jovem
                img.setAttribute('src','jovem-m.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src','idoso-m.jpg')
            }

        } else if (fsex[1].checked){//se bolinha feminina selecionada gênero sera mulher

            gênero = 'Mulher'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 18){
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }

        }
        res.style.textAlign = 'center'//codigo para alinha div res
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)//imagem so aparece com esse codigo aqui, estou pedindo para img aparecer abaixo do res

    }

}

    //comentario para linha 8
    /*se o formulario.value.length for zero, 
    ou seja, se o usuario nao tiver digitado o ano ou o ano que foi digitado for maior do que 
    o ano atual (formuluarioano.value > ano)*/

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //comentario para a linha 14
    /*nos inputs masc e fem os dois possuem o name igual(radsex) pois
        se for dado names diferentes, quando for selecionar a bolinha pra esxolher o sexo (pagina) os dois sexos serão
        marcados automaticamente, assim impossibilitando a escolha de sexo( radsex [0] é a pção Masculino e o radsex [1] é a 
        opção Feminino)*/ 
        /*var idade = ano - Number(formularioano.value)
        res.innerHTML = `Idade calculada: ${idade}`*///codigo teste, pra ver se funciona a idade