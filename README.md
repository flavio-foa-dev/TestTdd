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



