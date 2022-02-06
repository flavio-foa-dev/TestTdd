# TestTdd
NodeJS: Mocha , Chai e Sinon


### O que vamos aprender
Hoje você aprenderá mais sobre testes e como testar seus scripts NodesJS. Você irá rever os conceitos de testes e os benefícios de escrever testes automatizados.
Para isso, você irá conhecer três ferramentas bastante populares para testes com NodeJS: Mocha , Chai e Sinon . Iremos nos aprofundar em cada uma dessas, aprendendo sobre suas funções e como utilizá-las.
Além disso, revisitaremos conceitos importantes como asserts , testes unitários e TDD .

## conseguira  :

- Entender o que são e para que servem testes automatizados.
- Escrever códigos para nodeJs aplicando o conceeito TDD
- escrever teste  utilizando ferramentas populares;
- Estruturas cenários de teste de acordo com or requesitos:
- criar mocks de funções para teste.

## Isso é importante

Tete são importante e faz parte do dia  a dia  de uma pessoa desenvoledora. Ao longo do desenvolvimento de novas funcionalidades ou de correção de softwaqre, precisamostesta  se nossas implementações, estão se comportanddo  como o esperado e realizando aquilo que se propõe de maneira correta.

Dessa forma, como exemplo, podemos citar que a agilidade, a produtividade, a perfomace e a qualidade do processo de desenvolvimento e do sofware em si, estão diretamente relacionadas a maneira como testamos nossos codigos.

E é por esses  motivos que devemos que diversas empresas  adotam em seu fluxo de desenvolvimento etapas para escritas de teste, sendo consideradas como parte fundamental das entregas. Sendo assim, Saber escrever testes e porque escrever testes ale,m de agregar tgodos os beneficios dessa mentalidade ao seu dia a dia, tambem ira ajudar a interagir times que possuem essa pratica.

E como ja mencionamos em outros conteudos, ao final desse estudo voce ira  ter a mentalçidade orientada a testes, o que tem um grande valor no dia-adia de quem sesenvolve

## Bora La

## Teste nao sao  de outro mundo nao tenha medo

antes de falarmos de teste automatizados e das ferramentas de teste  que podemos utilizar  para testar  nossos códigos em nodeJS, vamos refletir um pouco sobre algumas da experiencia que ja tivemos ate aqui.

Você aprendeu diversos conceitoe, para fixar, colocou em pratica a mao na massa
durante esse processo , vamoslembrar, era comum executar o mesmo código várias e várias vezes para ver se seu comportamento era o mesmo que esperávamos. Muitas vezes realizamos o mesmo teste alterando os dados de entrada (input) para garantir que a saída (output) era condizente com aquilo que foi codificado. E aposto que muitas das vezes o resultado não era positivo: havia faltado um if , as vezes precisava de mais um parâmetro ou até mesmo um retorno não tratado como deveria.
Você deve estar se perguntando onde iremos chegar com essa conversa toda né?! E a resposta é simples: Esse processo, que fazemos praticamente de forma natural, nada mais é do que testar . Ou seja, naturalmente testamos nosso código enquanto o escrevemos e esse é justamente o fazer testes .


## Devemos testar la

Existem diversos tipos de testes , cada um com suas caracteristicas e objetivos, O processo que acabamos de mencionar no topico anterior, pode ser cham,ado de testes manuas, Nesses testes reexecutamos o codigo algumas vezes buscando validar se o compirtamento que queremos esta sendo realizado corretamente e tambem alterando os paramentros de entrada para tentarmos garantir que tal funcionamento se mantem mesmo com essas variações.

Vamos a um exemplo prático, imagine que queremos criar uma função que receba a média das notas de uma pessoa e responda se ela foi aprovada ou não segundo a seguinte regra:
Média	Situação
Menor que 7	Reprovado
Igual ou maior que 7	Aprovado

  o primeiro passo que precisamos daar é pensar na estrutura do nosso codigo;

- quantos e quais paramentros ela ira receber
- Qual tipo de resposta ela ira retorna ?

No nosso caso nossa função devera receber um paramentro "media" e responderar com  aprovado ou reprovado.
tendo isso em mente esse comportamento de retorno , tendo esse  questionamento ja poderiamos parti para implementação docodigo

```
function calculaSituacao(media) {
  if (media > 7) {
    return 'aprovado';
  }

  return 'reprovado';
}

module.exports = calculaSituacao;
```

Simples né? Agora vamos testar essa função de acordo com os comportamentos que ela deveria ter segundo a proposta, nesse caso precisamos garantir que:
Se passado um valor menor que 7 , por exemplo 4 , a resposta deve ser "reprovado" ;
Se passado um valor maior que 7 , por exemplo 9 , a resposta ser "aprovado" ;
E, não podemos esquecer do "OU", sendo assim, se passado 7 , a resposta deve ser "aprovado" ;
Para validar esses cenários que pensamos podemos escrever algumas chamadas a nossa função:


const calculaSituacao = require('./examples/calculaSituacao');

console.log(calculaSituacao(4));
// console: reprovado

Para ficar mais simples, poderíamos adicionar algumas mensagens para nos ajudar e também já verificar se a resposta dada é aquela que esperamos:

```
const calculaSituacao = require('./examples/calculaSituacao');

console.log('Quando a média for menor que 7, retorna "reprovado":');

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for menor que 7, retorna "reprovado":
// Ok 🚀

console.log('Quando a média for maior que 7, retorna "aprovado":');

const respostaCenario2 = calculaSituacao(9);
if (respostaCenario2 === 'aprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for maior que 7, retorna "aprovado":
// Ok 🚀

console.log('Quando a média for igual a 7, retorna "aprovado":');

const respostaCenario3 = calculaSituacao(7);
if (respostaCenario3 === 'aprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
// console:
// Quando a média for igual a 7, retorna "aprovado":
// Resposta não esperada 🚨

```

Temos um bug aqui! 🐞
De propósito, deixamos um comportamento falho para simular uma situação normal do dia-a-dia. Nesse caso pode ser um detalhe simples em uma função simples, mas em sistemas mais complexos, onde temos diversos pontos diferentes interligados e várias pessoas trabalhando no mesmo código, um cenário de falha é ainda maior.
O que poderíamos fazer em uma situação dessas é implementar a correção e chamar as funções novamente, garantindo que dessa vez todos os cenários estão cobertos inclusive aqueles que já estavam funcionando antes da correção.
Porém, como vimos na prática, testar manualmente nosso projeto pode ser uma tarefa árdua e repetitiva. Como pessoas desenvolvedoras, capazes de construir soluções para tornar processos mais eficientes e rápidos, menos repetitivos e menos sujeitos a erros humanos, por que não automatizamos esse processo também, colhendo dessas e outras vantagens?
É o que veremos a seguir!


## Teste automatizados

### Ferramentas

Automatizar testes é uma necessidade tão presente no dia a dia dos times de desenvolvimento que é assunto de discursção e evolução;

Hoje, ja e um assunto amplamente difundido e é possivel encontrar diversos tipos, de tecnicas, implememtação e ferramentaas diferentes. Essa base solida sobbre  o assunto nos ajuda bastante, jha que temos diversas ferramentas ja consolidadas prontas para serem utilizads.

Ja vimos outras ferramentas desse tipo  exemplo JEST eo ASSERT.
Para implementar  teste no back end iremos utilizar a dupla `Mocha e chai` .  Apesar de serem duas ferramentas diferentes, elas se completam.

⚠️ Importante: Conforme dito, existem diversas ferramentas disponíveis para teste, e inclusive é possível utilizar o próprio Jest, que vimos em conteúdos anteriores, para testes no back-end também. Porém, como o objetivo é desenvolver uma mentalidade de testes independente das ferramentas, utilizaremos essa stack específica, mas, os conceitos são os mesmos.

Para utilizarmos essas ferramentas precisamos primeiro fazer a instalação, repare que utilizaremos a flag -D . Esses módulos só serão utilizados em fase de desenvolvimento e não serão utilizados para executar nossa aplicação quando ela for publicada. Dessa forma, evitamos instalar pacotes desnecessários em nossa versão de produção.

```
npm install -D mocha chai
```
Feita a instalação já podemos importá-las em um arquivo .js e escrever nossos testes.

### Tipos de testes

Uma coisa importante para se ter em mente na hora de produzir é o **escopo** e a **interação** doa testes. para isso existem algumas divisões arbitrarias que nos ajudaram a pensar um a ordem de desenvolvimento de testes, sendo as mais comuns:

 - Testes unitários : Trabalham presumindo um escopo limitado a um pequeno fragmento do seu código com interação mínima entre recursos externos. Ex: Uma função com um fim específico, como uma função que soma dois números:

```
// ./funcoes/calculo/soma.js
// Aqui podemos escrever testes pensando somente o comportamento esperado para função `soma`

const soma = (valorA, valorB) => valorA + valorB;

module.exports = soma;
```

  - Testes de integração : Trabalham presumindo a junção de múltiplos escopos (que tecnicamente devem       possuir, cada um, seus próprios testes) com interações entre eles. Ex: Uma função de calculadora que usa funções menores que eu posso testar isoladamente/ de forma unitária:

```
// ./funcoes/calculadora.js
// Aqui podemos escrever testes pensando o comportamento da função `calculadora` que presume o bom comportamento das funções que integram ela: `soma`, `subtracao`, `multiplicacao`, `divisao`

const { soma, subtracao, multiplicacao, divisao } = require("./calculo");

const calculadora = (valorA, valorB, operacao) => {
  switch(operacao) {
    case "soma":
      soma(valorA, valorB);
      break;
    case "subtracao":
      subtracao(valorA, valorB);
      break;
    case "multiplicacao":
      multiplicacao(valorA, valorB);
      break;
    case "divisao":
      divisao(valorA, valorB);
      break;
    default:
      break;
  }
};

module.exports = calculadora;

// Esse contexto fica mais evidente, quando temos operações mais complexas nos nossos testes, como operações que envolvem leitura de arquivos e consultas no banco de dados para composição de informações
```

  - Testes de Ponta-a-ponta : Chamados também de Fim-a-fim (End-to-End; E2E) , esses testes pressupõe um fluxo de interação completo com a aplicação, de uma ponta a outra: Aqui, poderíamos pensar uma API que utiliza nossa calculadora (assim como diversas outras funções mais complexas) na hora de realizar uma operação de venda de produtos. Esse teste é o mais completo pois pressupõe que todos os demais testes estão ou serão desenvolvidos (Pensando na prática do TDD que veremos mais adiante).
  - Um exemplo prático disso, são os avaliadores de projetos de front-end: Eles pressupõem que toda cadeia de recursos deva estar funcionando para correta renderização das páginas. O que é avaliado com interações de uma ponta a outra dessa aplicação (Que são os requisitos , na prática).


Evidentemente isso pode variar a depender do contexto e da forma como os grupos trabalham, mas no geral, existe sempre uma relação de escopo/interação que é definida durante o desenvolvimento de testes e quanto maior o número de escopos diferentes e situações de interação prevista dentro desses escopos, maior a coesão e a confiabilidade do seu projeto.
Aqui, vamos trabalhar com testes unitários pois são mais simples e com a prática, esse padrão tornará testes complexos mais fáceis de entender.

## Escrevendo Testes

Para exemplificar o processo de escrita de codigo, vamos criar um exemmplo
O primeiro passo e compreender, atraves dos requesitos, a estrutura que desejamos ter e os comportamentos esperados, Ja desenvolvemos esses pensamentos  anteriormente, retornado as termos


  - sobre a estrutura que
    - nossa função devera receber um parametro
    - responder retorno
  - sobre o comportamento esperado vamos fazer de seguinte forma
    1. Se passado um valor menor que 7 , por exemplo 4 , a resposta deve ser "reprovado" ; 2 - Se passado um valor maior que 7 , por exemplo 9 , a resposta ser "aprovado" ; 3 - E, não podemos esquecer do "OU", sendo assim, se passado 7 , a resposta deve ser "aprovado" ;

essa estrutura é o que precisamos antes mesmo de escrever o codiugo.

## estrutura testes com o Mocha
o `mocha` e um framework de teste para js, isso significa que ele nos ajuda a arquitetar os nossos testes, nos fornecendo a estrutura e interface para escrevermos os nossos testes.

Vamos começar pelos comportamento. da mesma forma como escrevemos os comportamento acima, temos que faze-lo nos testes  para dizermos o que estamos testando naquele caso espécifico. Para isso, o mocha nos fornece duas palvaras reservadas o `describe e o it`.

O describe nos permite adicionar uma descrição para um teste especifico um grupo de testes. Ja o it nos permite sinalizar exatamente o cenario de teste que estamos testando naquele ponto.
Relembrando os testes que escrevemos  na mao  o mocha subistitui aqueles logs que utilizamos para descreever cada teste;

console.log('Quando a média for maior que 7, retorna "aprovado":');

Bora ver na prática como podemos fazer isso com a ajuda do mocha . Esse mesmo cenário 1 , utilizando describe para descrever o cenário ficaria assim:


describe('Quando a média for menor que 7', () => {
  //
});

Perceba que o describe aceita dois parâmetros: o primeiro é a descrição e o segundo uma função para executar o cenário de teste. Outro ponto de atenção é que não é necessário importar o mocha em nosso arquivo, suas palavras reservadas serão interpretadas quando executamos o testes, mas veremos mais adiante como fazê-lo.
Descrito nosso comportamento, vamos adicionar o que será testado de fato, ou seja, o que é esperado. Para isso, temos o it


describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    //
  });
});

A sintaxe do it é bem semelhante à do describe : ela aceita uma string, qual o comportamento a ser testado, e uma função que executa os testes de fato.

## Aferindo os testes com o chai

O `chai` nos ajudará  as asserções, ou seja, ele nos fornece maneiras de dizermos o que queremos testar e então ele validará se o resultado condiz xom o esperado.
Ate aqui não estamos testando nada de fato, apenas descrevendo o teste. Para de fato testar nossa função precisamos chamá-la passando o input desejado e então validar se a resposta é aquela que esperamos.

Sem  as feraamentas de testes fizemos essa verificação utilizando alguns `ìfs`, o que é bem trabalhoso"

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}



Essa validação é o que chamamos de assertion , "asserção" ou, em alguns casos, "afirmação" . Para nos ajudar com essa tarefa temos o chai , que nos fornece diversos tipos de validações diferentes.
Usaremos a interface expect do chai em nossos exemplos, que significa de fato o que é esperado para determinada variável:

const resposta = calculaSituacao(4);

expect(resposta).equals('reprovado');

No código acima, estamos chamando nossa função e, logo em seguida, afirmamos que seu retorno, armazenado na constante resposta , deve ser igual a ( equals ) 4 .
Muito mais legível e simples!
Vamos ver como fica nosso cenário de teste inteiro com mocha + chai :
tests/calculaSituacao.js

const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovado');
  });
});

Pronto, nosso primeiro cenário de teste está escrito. Perceba como o chai nos fornece uma função pronta, equals que irá comparar se o valor "esperado" na resposta é igual ao passado para ele, ou seja, igual a "reprovado".
A asserção equals é uma das diversas asserções disponíveis no chai. A documentação completa pode ser encontrada na documentação oficial do chai .
Para tornar nosso teste ainda mais legível e elegante, o chai nos fornece outros getters encadeáveis que possuem um papel puramente estético. Por exemplo o to e o be , que nos permite escrever nossa assertion da seguinte maneira:
tests/calculaSituacao.js


const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});


Perceba que o to e o be não alteraram em nada a validação realizada, porém, a leitura fica muito mais fluída e natural, é como se estivéssemos dito que nosso teste "espera a resposta ser igual a "reprovado".
Podemos encontrar um pouco mais sobre esse getters na documentação oficial do chai , em language chains .

## executando testes
antes de começarmos, precisamos criar nosso pacote node para incluirmos os scripts necessario em `package.jsonn`:

npm init # Iniciando o npm

Testes escrito, vamos ver como executá-lo. Como dito antes, o `mocha` é o responsavel por executar nossos testes. Ele entenderá as palavras reservadas `describe` e `it`, assim como estrutura do nosso teste.

Poderiamos tê-lo instalado de maneira global `npm install -g mocha ``em nossa maquina, e bastaria chama-lo diretamente em nosso terminal passando o arquivo de testes ( mocha tests/calculaSituacao.js ).

Entretanto, faremos da maneira mais recomendada e elegante:

vamos adicionar um novo script ao nosso package.json , que chama o mocha e informa um arquivo ou diretório de testes:

package.json

{
// ...
  "scripts": {
    "start": "node index.js",
    "test": "mocha tests"
  },
// ...
}

Dessa forma, não precisamos instalar nada globalmente, e para executar nosso teste basta rodar em nosso terminal o script test , que irá executar =o comando mocha tests utilizando o módulo instalado:


npm run test
Ou simplesmente
npm test


## Testando todos os cenarios possiveis em uma estrutura de codigo

Adicionando os demais comportamento, temos:

  test/calculasituacao.js


const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});

describe('Quando a média for maior que 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(9);

    expect(resposta).to.be.equals('aprovado');
  });
});

describe('Quando a média for igual a 7', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovado');
  });
});

pronto assim estamos com todos osteste desta aplicação testado
vamos executar os testes e ver como retornado

Nosso teste agora está validando com sucesso os cenários esperados. Podemos então, aplicar a correção que falta em nosso código e então simplesmente rodar npm test para garantir tanto que o bug foi corrigido, quanto que os outros cenários continuaram funcionando após a correção.


# TDD - Transformando requisito em testes

Agora que ja vimos  como utilizar ferramentas para nos ajudar na escrita de teste, vamos novamente refletir sobre o que fizemos ate aqui.

No exemplo de media, começamos pela implementação do codigo, depois escrevemos os testes para validar, então, descrobrimos que havia um cenario que estava funcionando como esperado atraves dos testes , e precisavamos refatorar um erro no codigo , retorna da media e corrigi-lo

e se formos pelo caminho cotrario?, se antes de tentarmos escrever a implemantação , escrever os testes e velo quebrar e depois criar as funções para passar nos testes TDD.

Pensando dessa forma que surgiu o conceito de TDD (Test Driven Development), em tradução livre, Desenvolvimento Orientado a Testes . Esse metodologia é bastante difundida e pode trazer muitos benefícios para o desenvolvimento.

A prática do TDD em começar a escrever os testes que traduzem e validam os comportamentos esperados para aquele código antes de começar a implementação.

A ideia principal é começarmos escrever o código já pensando no que está sendo testado, ou seja, já teremos em mente quais os cenários que precisamos cobrir e também como nosso código precisa estar estruturado para que possamos testá-lo, já que códigos menos estruturados normalmente são mais difíceis de serem testados.

Dessa forma, pensando em passos para o TDD, podemos pensar da seguinte maneira:

1. Antes de qualquer coisa, precisamos interpretar os requisitos, pensando nos comportamentos que iremos implementar e a na estrutura do código: se será uma função, um módulo, quais os inputs, os outputs, etc..
2. Tendo isso em mente, começamos a escrever os testes, ou seja, criamos a estrutura de describes e its que vimos.
3. Depois, escrevemos as asserções. Perceba que antes mesmo de ter qualquer código, já iremos criar chamadas a esse código, o que significa que nossos testes irão falhar. Não se preocupe, pois essa é exatamente a ideia nesse momento.
4. Agora que já temos os testes criados, vamos a implementação do nosso código. A ideia é escrever os códigos pensando nos testes e, conforme vamos cobrindo os cenários, nossos testes que antes quebravam começam a passar.

Se precisar fazer algum ajuste nos testes em algum momento, não se preocupe! Isso é perfeitamente normal, visto que estamos escrevendo testes para código que ainda não existe, e um detalhe ou outro pode escapulir à mente.

