const { expect } = require("chai");

console.log("quando  a média for maior que 7, retorna aprovado:")

describe("quando a media for menor que 7",()=>{
  it("retorna reprovado",()=>{

  const resposta = calculaSituacao(4);

  expect(resposta).equals("reprovado")
  })
})