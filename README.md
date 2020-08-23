# Desafio00
Primeiro Desafio Javascript

## Temperatura Kelvin
Nesse desafio você irá construir um código que converte de Kelvin para Celsius e Fahreneit.  
Por exemplo, 283 K equivale a 10 ºC e também a 50 ºF.  
Se você empacar nesse exercício, peça ajuda a suas colegas!  
Você pode usar a IDE que preferir.  
Temos um console online no [Repl.it, clique aqui](https://repl.it/@EricaSugui/consoleLog).

## Tarefas
* A temperatura de hoje é `294` Kelvin. Para começar, crie uma variável de nome `kelvin`, e atribua o valor de `294`.  
* Escreva um comentário acima explicando essa linha de código.
* Celsius é similar a Kelvin, a diferença é que Celsius é 273 graus a menos que Kelvin.  
Vamos converter Kelvin para Celsius subtraindo `273` da variável `kelvin`. Guarde o resultado em uma nova variável `celsius`.
* Escreva um comentário acima do código que explique essa linha.
* Use a seguinte equaç!ao para calcular a temperatura Fahrenheit, então guarde o valor na variável de nome `fahrenheit`.  
`Farenheit = Celsius * (9/5) + 32`  
No próximo passo arredondaremos esse valor, então escolha um tipo de variável que permita essa mudança.
* Escreva um comentário explicando o código anterior.
* Ao converter de Celsius para Fahrenheit, você pode conseguir um valor decimal.  
Use o método `.floor()` do objeto `Math`para arredondar o valor para baixo. Salve o resultado na variável `fahrenheit`.
* Escreva um comentário explicando o código anterior.
* Use o `console.log` e string interpolation (interpolação de cadeia de caracter) para logar a temperatura em `fahrenheit` no console da seguinte forma:  
```
A temperatura é de TEMPERATURA graus Fahrenheit.
```  
Use string interpolation para substituir TEMPERATURA pelo valor salvo em `fahrenheit`.
* Rode seu programa para ver os resultados!  
você pode copiar e colar no console do Chrome, ou usar esse repl.it: [Repl.it de javascript](https://repl.it/@EricaSugui/consoleLog)
* Usando variáveis, seu programa deve funcionar com qualquer valor de Kelvin, basta mudar o valor de `kelvin`e rodar o programa novamente.  
Quanto é 0 K em ºF?
* Agora seu programa pode calcular Celsius e Fahrenheit.  
* Se você quiser se desafiar mais, tente o seguinte:  
- Converta `celsius` para [Escala Newton](https://en.wikipedia.org/wiki/Newton_scale) usando a equação a seguir:  
`Newton = Celsius * (33/100)`  
- Arredonde para baixo usando o método `.floor()`  
- Use o `console.log` e string interpolation para logar a temperatura em `newton` no console.
## Entrega
Crie um arquivo `kelvin.js` com todo o código criado.  
Faça o Git Flow: se você não clonou esse repositório ainda, clone na sua máquina.  
Adicione com `git add .`, e depois `git commit -m "entrega do desafio 00"`. Se você não lembra do que estou falando, volte para a aula de Git e Github. 
Você precisa criar uma branch sua. Então dê `git checkout -b <seu-nome>`, exemplo `git checkout -b erica`.
Dê `git push origin <seu-nome>`.  
Volte ao repositório do Github, você verá um botão escrito `PULL REQUEST`. Isso é exclusivo de plataformas remotas como GitHub.  
Se você terminou de trabalhar em seu código, clique no botão, faça os comentários, realize o pull request, e depois aceite o MERGE.

## exit :) 


