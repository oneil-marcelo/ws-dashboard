# WS-Dashboard

A aplicação é um desafio para criar uma tela de relatório de cliente com o React.

## Como executar a aplicação

- Clonar repositório

[code] git clone https://github.com/oneil-marcelo/ws-dashboard.git [code]

- Na pasta do projeto executar npm

[code] npm install [code]

- Instalar de maneira global o <strong>json-server<strong>

[code] npm install -g json-server[code]

- executar o json-server na porta 3333 para emular o banco através do arquivo server.json

[code] json-server server.json -p3333 [code]

- executar a aplicação

[code] npm start [code]

## Sobre a aplicação

A aplicação simula uma tela de relatório de cliente, considerando que ele pode navegar para demais telas, foi criado o sistema de rota, embora a única rota implementada foi a home.

Também implementando os estado global da aplicação usando conceito de arquitetura flux através do Redux.

Uma vez detectado que o cliente está logado, todos os componentes, através do contexto que está conectado é notificado e assim seu estado e sua interface é manipulado.

Essa necessidade foi vista durante o desenvolvimento e maior independência dos componentes em relação a página principal.

## Sobre os dados da aplicação

Os dados são um mockup no arquivo server.json que fica na raiz do projeto.

Em conjunto com o pacote json-server que simula um serviço rest, foi criada uma API local que permitiu implementar os serviços http.

## Sobre os serviços http

Visto que aplicação é um teste e que API não apresenta comportamento indesejável, foi implementado apenas os cenários de sucesso nas requisições.

## Considerações

Nesse momento a aplicação foi tratada apenas para dispositivos desktop, torná-la responsiva não foi o foco.

O principal o objetivo foi organizar o código e aplicar uma estrutura que permita a aplicação ser escalável.
