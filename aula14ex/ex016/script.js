function contar (){
    let inicio = document.querySelector('#inumber')
    let fim = document.getElementById('fnumber')
    let passo = document.querySelector('#passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0|| fim.value.length == 0|| passo.value.length == 0){
        window.alert('[ERRO] está faltando alguma informação')// o teste é sobre a quantidade de caracteres e não do valor do campo.
    } else {

        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} `//INCREMENTAÇÃO res.innerHTML = res.innerHTML + c 
        }

        
    }
}

//explicação do codigo 
/*criei uma variavel c e 
enquanto o valor de c for menor ou igual ao valor de f a 
minha variavel c irá receber o valor dela mais o valor do 
passo, c = c + p, codigo resumido*/

/*suponhamos que c = 1, f = 1 e p = 1, então faremos o teste lógico primeiro,
c é menor ou igual a f? sim, c é igual a f, então agora será feito o bloco, 
o codigo do bloco pede para que apareça o res.innerHTML concatenado com o valor 
de c, ou seja, res.innerHTML += c  (res.innerHTML = res.innerHTML + c) portanto
o primeiro valor que aparece é 1, pois c esta valendo 1, depois do bloco executado
passaremos denovo pelo for agora fazendo a incrementação primeiro, ou seja c = c + p
entao o valor dessa conta será 2, faremos agora o teste logico, c é menor ou igual a 1? 
não, pois depois que a incrementação foi feita o c vale 2, portanto o loop é finalizado*/ 