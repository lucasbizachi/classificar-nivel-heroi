# Classificar o nível do herói
Desafio feito pelo professor Felipe na plataforma <a href="https://dio.me">Digital Innovation One</a>.
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

* Se XP for menor do que 1.000 = Ferro
* Se XP for entre 1.001 e 2.000 = Bronze
* Se XP for entre 2.001 e 5.000 = Prata
* Se XP for entre 5.001 e 7.000 = Ouro
* Se XP for entre 7.001 e 8.000 = Platina
* Se XP for entre 8.001 e 9.000 = Ascendente
* Se XP for entre 9.001 e 10.000 = Imortal
* Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

# Como concluí esse projeto:
Importação do módulo 'readline': O código começa importando o módulo 'readline', que permite a leitura de entradas do terminal no Node.js.

Configuração da interface de leitura: Uma interface de leitura é configurada usando o método readline.createInterface, especificando process.stdin para entrada padrão e process.stdout para saída padrão.

Solicitação do nome do herói: Usando o método question da interface de leitura, o código solicita ao usuário que digite o nome do herói.

Solicitação da XP do herói: Após receber o nome do herói, o código solicita ao usuário que digite a quantidade de experiência (XP) do herói.

Determinação do nível do herói: Com base na quantidade de XP inserida, o código determina o nível do herói de acordo com as condições estabelecidas:

* Se a XP for menor que 1000, o herói está no nível "Ferro".
* Se a XP estiver entre 1001 e 2000, o herói está no nível "Bronze".
* Se a XP estiver entre 2001 e 5000, o herói está no nível "Prata".
* Se a XP estiver entre 5001 e 7000, o herói está no nível "Ouro".
* Se a XP estiver entre 7001 e 8000, o herói está no nível "Platina".
* Se a XP estiver entre 8001 e 9000, o herói está no nível "Ascendente".
* Se a XP estiver entre 9001 e 10000, o herói está no nível "Imortal".
* Se a XP for maior que 10000, o herói está no nível "Radiante".
  
Exibição do resultado: Após determinar o nível do herói, o código exibe uma mensagem com o nome do herói e seu respectivo nível.

Fechamento da interface de leitura: Finalmente, a interface de leitura é fechada usando o método close.

Este código pode ser utilizado para classificar o nível de um herói com base em sua experiência (XP) inserida pelo usuário.

Fiz duas soluções para esse desafio:
