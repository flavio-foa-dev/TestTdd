const { expect } = require('chai');

const { caculaMedia } = require ('../examples/caculaSituacao')
console.log(caculaMedia(4))

describe('calcula media do aluno e retorna a situação  ', () => {
  it(' retorna reprovado quando a media é menor  7',()=>{

  const reposta = caculaMedia(4);

  expect(reposta).to.be.equals('reprovado')
  });

  it(' retorna aprovado quando a media e maior que 6',()=>{

    const reposta = caculaMedia(7);

    expect(reposta).to.be.equals('aprovado')
    });
});