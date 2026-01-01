# eteg_technical_test
Desafio técnico Desenvolvedor John Doe e seu form de cadastro

Olá, meu nome é John Doe. Eu gostaria de uma tela/formulário onde eu possa cadastrar algumas informações dos meus clientes e armazená-las em um banco de dados. Conversei com o meu primo Jorge, ele também é programador. Ele me disse que o Postgres é um banco de dados robusto para esse tipo de trabalho. As informações que eu preciso coletar são: Nome completo, CPF, e-mail, cor preferida (entre as cores disponíveis em um arco-íris, isso pode mudar posteriormente) e observações. Eu sei que isso pode parecer um pouco estranho, mas faz parte do meu negócio 🙂.

Preciso que um cliente consiga preencher o formulário uma única vez e ao clicar em enviar, o mesmo deve saber se o cadastro foi bem sucedido. Ah… quase me esqueci, o Jorge disse que vai hospedar isso pra mim. Ele mencionou um tal de Docker, disse que vai subir a "imagem" em um serviço terceirizado. 

Eu pretendo continuar esse projeto posteriormente, com outra equipe.
—
Baseado no caso de uso do cliente acima, construa uma aplicação que atenda os requisitos de negócio.
É requerido o uso de Typescript, React e Node.js. O código fonte deve ser disponibilizado em um único repositório.
Disponibilize o link do repositório com a solução e iremos avaliar o seu trabalho.

Joe, Tech Lead na Eteg


### Run application

# Client Registration App

Aplicação para cadastro de clientes com React, Node.js e Postgres.

## Como executar
1. Clone o repo.
2. Execute `docker-compose up --build`.
3. Acesse o frontend em http://localhost:3000 
4. Acesso a API em http://localhost:5000
5. Acesso ao Banco de dados através do pgAdmin http://localhost:5050/

## Requisitos Atendidos
- Formulário único para cadastro.
- Validações e armazenamento em Postgres.
- Feedback de sucesso.
- Docker para hospedagem.