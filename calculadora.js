// ./funcoes/calculadora.js
// Aqui podemos escrever testes pensando o comportamento da função `calculadora` que presume o bom comportamento das funções que integram ela: `soma`, `subtracao`, `multiplicacao`, `divisao`

const { soma, subtracao, multiplicacao, divisao } = require("./calculo");

const calculadora = (valorA, valorB, operacao) => {
  switch(operacao) {
    case "soma":
      return soma(valorA, valorB);

    case "subtracao":
      return subtracao(valorA, valorB);

    case "multiplicacao":
      return multiplicacao(valorA, valorB);

    case "divisao":
      return divisao(valorA, valorB);

    default:
      return "tente dinovo"


  }

};

// module.exports = calculadora;

// Esse contexto fica mais evidente, quando temos operações mais complexas nos nossos testes, como operações que envolvem leitura de arquivos e consultas no banco de dados para composição de informações

console.log(calculadora(10, 2, "soma"))
console.log(calculadora(10, 2, "subtracao"))
console.log(calculadora(10, 2, "multiplicacao"))
console.log(calculadora(10, 2, "divisao"))
console.log(calculadora(10, 2, "maismais"))
module.exports = calculadora;
