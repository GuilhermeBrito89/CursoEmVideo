function tabuada (){
  let num = document.getElementById('txtn')
  let tabuada = document.querySelector('#seltabuada')

  if(num.value.length == 0){

    window.alert('Por favor digite um número')

  } else {

    let n = Number(num.value)
    let c = 1
    tabuada.innerHTML = ''/*toda vez que adicionarmos um numero para mostar tabuada, a tabuada do número anterior será
    apagada*/

    while (c<=10){//enquanto c for menor ou igual a 10 

      let item = document.createElement('option')//será criada uma option no html
      item.text = `${n} x ${c} = ${n*c}`//onde o text da option será esse codigo
      
      item.value = `tabuada ${c}`/*esse código só importa para outras linguagens de programação, como php
      pois quando for selecionado a option no html dirá qual a value daquela option, option 1, option 2, etc...
      dependendo do valor de c*/

      tabuada.appendChild(item)//sem esse codigo aqui, os meus options nao serão adicionados no html
      c++// c mudará de valor toda vez que o bloco for efetudado 

    }

  }

}