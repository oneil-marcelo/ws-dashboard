# WS-Dashboard

A aplicação é um desafio para criar uma tela de relatório de cliente com o React.

### Como executar a aplicação

- Clonar repositório

`git clone https://github.com/oneil-marcelo/ws-dashboard.git`

- Na pasta do projeto executar npm

`npm install`

- Instalar de maneira global o <strong>json-server<strong>

`npm install -g json-server`

- executar o json-server na porta 3333 para emular o banco através do arquivo server.json

`json-server server.json -p3333`

- executar a aplicação

`npm start`

### Sobre a aplicação

A aplicação simula uma tela de relatório de cliente, considerando que ele pode navegar para demais telas, foi criado o sistema de rota, embora a única rota implementada foi a home.

Também foi implementando o estado global da aplicação através do Redux. Assim, garatiu-se maior independência dos componentes, visto que uma vez que o cliente é logado todos são notificados.

### Sobre os dados da aplicação

Os dados são um mock no arquivo server.json que fica na raiz do projeto.

Em conjunto com o pacote json-server, foi criada uma API local que permitiu implementar as requisições http.

### Sobre os serviços http

Visto que aplicação é um teste e que API não apresenta comportamento indesejável, implementou-se exclusivamente os cenários de sucesso das requisições.

### Considerações finais

Nesse momento a aplicação foi tratada apenas para dispositivos desktop, torná-la responsiva não foi abordado.

O principal o objetivo foi organizar o código e aplicar uma estrutura que permita a aplicação ser escalável.
