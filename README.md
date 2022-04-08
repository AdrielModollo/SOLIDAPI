"# SOLIDAPI" 

Solid é um conjunto de 5 principios..

1°Single Responsibility principle - Responsável por executar uma única responsabilidade ou tarefa. 

2°Open closed principle - Define uma classe que deve ser aberta para extensões, mas não para modificações.
(Reaproveitamento de funcionamento, substituindo apenas alguns pontos).

3°Liskov substitution principle - Defende que pode substituir implementação classes que ele depende.
Imagina que temos uma classe, um controller que faça upload de arquivos e temos vários drivers, 
podemos pegar esses driver e simplesmente trocar sem prejudicar a lógica. 

4°Interface agregation principle - Para interfaces complexas, não crie interface robusta, e sim divida e crie
interface menores. Por exemplo imagina uma interface de campo de futebol, os jogadores seria divido da seguinte forma:
Goleiro, atacante, zagueiro, meio-campo, etc...

5°Dependency inversion principle - Determina que as clases que realiza as ações, elas não devem depender de implementação,
elas devem depender de interfaces. 

A ideia do Yarn é melhorar o tempo de download dos pacotes, pois o NPM é conhecido por ser lento nas restaurações das dependências e inclusive sendo possível resolver dependências sem o uso da internet usando o cache local.

==========CONFIGURAÇÕES============

yarn init -y

yarn install

yarn add express

yarn add typescript ts-node-dev -D <-(para ambiente de desenvolvimento)

yarn tsc --init <- (criar o arquivo tsconfig.json)

yarn add @types/express -D <- (Adicionar tipagem, para saber o que tem exatamente lá dentro)

yarn start <- (executa nossa api)

yarn add uuidv4 <- (Bibilioteca universal para gerar ID único)

yarn add nodemailer (Ferramenta comum para enviar emails dentro do node).

yarn add @types/nodemailer -D

Utilizar insominia designer para testar:
Create -> Blank Document -> SOLIDAPI -> New Request -> Create User / POST / JSON -> DEBUG:
{
	"name": "Adriel Modollo",
	"email": "adrielmodollo@outlook.com",
	"password": "1234567"
}

SEND

