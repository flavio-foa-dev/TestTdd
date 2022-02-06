const { soma, subtracao, multiplicacao, divisao } = require('./calculo');

const calculadora =  (valorA, valorB, operacao) => {
  switch (operacao){
    case "soma":
      soma(valorA, valorB);
      break;

    case "subtracao":
      subtracao(valorA, valorB);
      break;

    case "multiplicacao":
      multiplicacao(valorA, valorB);
      break;

    case"divisao":
      divisao(valorA, valorB);
      break;

    default:
      console.log("essa operação nao existente");
      break;
  }
}


console.log(calculadora(10, 2, soma))
module.exports = calculadora