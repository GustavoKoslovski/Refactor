//Função que retorna um número aleatório//
function returnRandomNumber() {
  return Math.random();
}

//Função que multiplica o numéro aleatório por 100//
function numeroRound(num){
  return Math.round(num * 100);
}

//Função que multiplica e faz a soma dos números//
function sumToRandomNumber(num) {

  return `Seu número é ${numeroRound(returnRandomNumber()) + num}!`;
}

//Função que multiplica e a subtração dos números//
function subtractRandomNumber(num) {
  return `Seu número é ${numeroRound(returnRandomNumber()) - num}!`;
}

//Função que multiplica e faz a multiplicação dos números//
function multiplyToRandomNumber(num) {
  return `Seu número é ${numeroRound(returnRandomNumber()) * num}!`;
}

//Função que multiplica e faz a divisão dos números//
function divideRandomNumber(num) {
  return `Seu número é ${numeroRound(returnRandomNumber()) / num}!`;
}