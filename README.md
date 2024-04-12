## Sistema de Catálogo de Jogos
Este é um sistema de catálogo de jogos desenvolvido com Laravel 11.3.1 para o backend e Inertia.js com React para o frontend. 
O sistema permite aos usuários visualizar uma lista de jogos, adicionar jogos aos favoritos, e explorar diferentes plataformas e categorias de jogos.

## Funcionalidades Principais
Visualização de uma lista de jogos disponíveis.
Adição de jogos aos favoritos para acesso rápido.
Exploração de jogos por categoria.
Autenticação de usuário para acesso a recursos protegidos.

## Pré-requisitos
PHP >= 7.4 e Composer instalados globalmente.
Node.js e npm instalados globalmente.
Banco de dados PostgreSQL 15 (ou outro banco de dados compatível) configurado e rodando localmente ou em um servidor remoto.

## Instalação e Uso

Clone este repositório em seu ambiente local:

git clone https://github.com/LeticiaPavaoES/ProjetoJogos.git


Navegue até o diretório do projeto e instale as dependências do backend:

cd ProjetoJogos/backend2

composer install


Configure o banco de dados PostgreSQL editando o arquivo .env com suas credenciais.


Execute as migrações e as seeds para criar as tabelas e popular o banco de dados:

php artisan migrate --seed


Inicie o servidor backend:

php artisan serve


## No diretorio backend2 e instale as dependências:

npm install


Inicie o servidor frontend:

npm run dev 


Acesse o sistema em seu navegador web:

APP_URL: http://127.0.0.1:8000


## Segunda opcao para frontend

Navegue até o diretório do frontend e instale as dependências:


cd ../frontend

npm install


Inicie o servidor frontend:

npm run dev


Acesse o sistema em seu navegador web:

Local: http://localhost:3000


## Contribuindo
Se você deseja contribuir com este projeto, siga estas etapas:

Fork este repositório.

Crie uma nova branch com sua funcionalidade:

git checkout -b minha-funcionalidade

Faça suas alterações e commit:

git commit -m 'Adiciona minha funcionalidade'

Envie para a branch principal do seu fork:

git push origin minha-funcionalidade
Abra um pull request para revisão.

Licença
Este projeto está licenciado sob a Licença MIT.
