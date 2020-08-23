//Programa Inicial de Desafio PROGRAMA00 / UNIVESP

//A temperatura hoje em Kelvin
var kelvil = 294;

//A temperatura em Celcius
var celcius = (kelvil-273);

//A temperatura em fahrenheit
var fahrenheit = 0;

//Calculo da temperatura em fahrenheit
fahrenheit = celcius * (9/5) + 32;

//Exibir o valor numerico sem as casas decimais
console.log(Math.floor(fahrenheit));
