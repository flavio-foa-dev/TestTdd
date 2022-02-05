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





