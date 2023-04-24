## variáveis simples
só conseguem armazenar um valor por vez

se declarar que uma variavel c = 5 e depois voce reatribuir outro vaor a ela
ela perde o valor que foi atribuido inicialmente

## variáveis compostas (array ou vetor)
são capazes de armazenar vários valores em uma mesma estrutura

ou seja se você atribui o valor 8 para ela depois 5 e depois 9, etc..., ela irá 
armazenar todos os valores que foram atribuídos

vamos usar o exemplo com vagas de carros

se eu quisesse ter 3 vagas cada uma com um carro
usando a variavel simples eu teria de fazer 3 variaveis

vaga1 = carro1
vaga2 = carro2
vaga3 = carro3

mas usando a variável composta (array)
crio uma variavel só, que recebe todos os automoveis

var automoveis = [carro1, carro2, carro3]
                     0       1      2

cada espaço recebe um número (índice), assim sendo identificados

## cada vetor é composto por

elementos

cada elemento é um par que agrupa o espaço da memória, o valor colocado dentro dele e o índice (chave, key)

array é uma variável que tem vários elementos, cada elemento é composto por seu valor e por uma chave de identificação (índice)

## array no js

let num = [5, 8, 4]
           0  1  2
