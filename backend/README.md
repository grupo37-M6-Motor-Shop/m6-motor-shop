# Motor Shop API
Esse projeto é uma loja de veículos no qual um usuário(user) poderá se cadastrar e fazer o login, para que assim possa postar um anuncio sobre um veiculo, ou comentar no anuncio de outros usuários.

## TECNOLOGIAS
  * Typeorm
  * Typescript
  * Express NodeJs
  * Ts-node-dev
  * Bcryptjs
  * Jsonwebtoken
  * Dotenv
  * Class-transformer
  * Express-async-errors
  * Pg
  * Reflect-metadata
  * Cross-env

<br>

<h2 align ='center'> Rodando a aplicação localmente: </h2>
### Primeiramente...
1 - Copie a chave SSH clicando no botão "Code" logo acima.
2 - Após ter feito a copia da chave SSH, abra seu terminal e digite o comando: `git clone` (ainda não aperte enter), mais o clone da "chave SSH".

### Após clonar o repositório...
3 - No terminal bash do projeto, rode o comando `yarn`, para que assim possa ser instalada todas as dependências.
4 - Quando todas as dependencias estiverem instaladas, crie um arquivo `.env` na "raiz" do projeto.
5 - Faça um cópia de tudo oque estiver no arquivo `.env.example` e cole no arquivo `.env`. Não esqueca de preencher suas informações no arquivo `.env`.

### Depois de preencher o arquivo .env...
6 - Vá para o terminal bash do projeto e rode a seguinte cadeia de comandos:

(obs: não se esqueça de criar seu banco de dados antes de fazer esse procedimento)

- primeiro - `yarn typeorm migration:create src/migrations/initialMigration`
- segundo - `yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts`
- terceiro - `yarn typeorm migration:run -d src/data-source.ts`
com esses três comandos será possivel criar as imagens das entidades do banco de dados, montar essas imagens e roda-las.

### terminando de popular o banco de dados...
7 - Rode o comando `yarn dev`, que irá abrir o servidor local para se utilizar da api. 

<br>

# REQUISIÇÕES

<br>

> # Create User - POST `/users`
>> ## Formato da requisição:
>
> * O `email` deve ser único;
> * Todos os campos são `obrigatórios`;
>
>```json
> {
>   "name": "Admin",
>   "email": "admin@mail.com",
>   "cpf": "123.456.789-12",
>   "phone": "24999123456",
>   "birthday": "01/01/90",
>   "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>   "advertiser": false,
>   "password": "1234",
>   "isAdm": true
> }
>```
* A chave `isAdm` tem por padrao um valor booleando false, só alteramos ele para true, nós administradores 

>> ## Formato da resposta:
>
> * Status: `201 CREATED`;
> * A `password` do usuário deve ser armazenada como `hash` e `não deve ser retornada` na resposta;
>
```json
{
	"name": "Admin",
	"email": "admin@mail.com",
	"cpf": "123.456.789-12",
	"phone": "24999123456",
	"birthday": "01/01/90",
	"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
	"advertiser": false,
	"isAdm": true,
	"id": "3eabdcd4-cb31-4208-bfc4-c6d8089cf986",
	"isActive": true,
	"createdAt": "2023-02-17T21:20:35.532Z",
	"updatedAt": "2023-02-17T21:20:35.532Z"
}
```
> ## E-mail já cadastrado
>> ## Formato da resposta:
>
> * Status: `409 CONFLICT`;
>
>```json
> {
>   "message": "E-mail already exists"
> }
>```
> ## Faltando campo obrigatório
>> ## Formato da resposta:
>
> * Status: `400 BAD REQUEST`;
>
>```json
> {
>   "message": "name, email, password, cpf, phone, birthday, description are required fields"
> }
>```
> ## Enviando outros campos
>> ## Formato da resposta:
>
> * Status: `400 BAD REQUEST`;
>
>```json
> {
>   "message": "Only name, email, password, cpf, phone, birthday, description can be send"
> }
>```
>---

<br>

> # Profile User - GET `/users`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`
>
>> ## Formato da resposta:
>
> * Status: `200 OK`;
> * A `password` do usuário `não deve ser retornada` na resposta;
>
>```json
> {
>   "id": "d54d166e-5c57-46ec-9ca7-545944a2b15b",
>   "name": "Lívia Oliveira",
>   "email": "livia.oliveira@mail.com",
>   "isAdm": true,
>   "isActive": true,
>   "createdAt": "2022-10-21T23:19:09.501Z",
>   "updatedAt": "2022-10-21T23:19:09.501Z"
> }
>```
> ## Sem token / token inválido
>> ## Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "Missing authorization headers"
> }
>```
>---

<br>

> # Retrieve User - GET `/users/:id-user`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas o `administrador` pode ver os dados de outro `administrador` e de usuário desativados - `(IsActive = false)`;
>
>> ## Formato da resposta:
>
> * Status: `200 OK`;
> * A `password` do usuário `não deve ser retornada` na resposta;
>
>```json
> {
>   "id": "c95d139f-5c57-46ec-9ca7-545944a2b10b",
>   "name": "Maria Belchior",
>   "email": "maria.belchior@mail.com",
>   "isAdm": false,
>   "isActive": true,
>   "createdAt": "2022-10-21T23:19:09.501Z",
>   "updatedAt": "2022-10-21T23:19:09.501Z"
> }
>```
> ## Sem token / token inválido
>> ## Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>```json
> {
>   "message": "Missing authorization headers"
> }
>```
> ## Id inválido
>> ## Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>```json
> {
>   "message": "User not found"
> }
>```
> ## Buscando administrador ou usuário desativado sem ser administrador
>> ## Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "User is not admin"
> }
>```
>---

<br>

> # List Users - GET `/users`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Necessário ser `administrador`;
>
>> ## Formato da resposta:
>
> * Status: `200 OK`;
> * A `password` dos usuários `não deve ser retornada` na resposta;
>
>```json
> [
>   {
>      "id": "b983742d-f496-4e0d-b1aa-171081b4c0ed",
>      "name": "Felipe Vieira",
>      "email": "felipe.vieira@mail.com",
>      "isAdm": false,
>      "isActive": true,
>      "createdAt": "2022-10-30T17:00:27.841Z",
>      "updatedAt": "2022-10-30T17:00:27.841Z"
>    },
>    {
>      "id": "d43cb0e4-7e4f-4809-969e-d3afcaa3afea",
>      "name": "Letícia Angelin",
>      "email": "leticia.angelin@mail.com",
>      "isAdm": false,
>      "isActive": true,
>      "createdAt": "2022-11-01T02:01:54.416Z",
>      "updatedAt": "2022-11-01T02:01:54.416Z"
>    }
> ]
>```
> ## Sem token / token inválido
>> ## Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>```json
> {
>   "message": "Missing authorization headers"
> }
>```
> ## Sem ser administrador
>> ## Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "User is not admin"
> }
>```
>---

<br>

> # Update User - PATCH `/users/:id-user`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas o `administrador` pode atualizar `outros usuários`;
> * Apenas os campos de `name`, `email` e `password` podem ser alterados;
>  
>```json
> {
>   "name": "Lucas Developer",
>   "email": "lucas.developer@mail.com",
>   "password": "5678"
> }
>```
>> ## Formato da resposta:
>
> * Status: `200 OK`;  
> * A `password` do usuário `não deve ser retornada` na resposta;
>
>```json
> {
>   "id": "8e3d8a20-8f55-4e5c-b382-a48e0557a1d5",
>   "name": "Lucas Developer",
>   "email": "lucas.developer@mail.com",
>   "isAdm": true,
>   "isActive": true,
>   "createdAt": "2022-10-20T20:47:27.856Z",
>   "updatedAt": "2022-10-21T00:08:28.036Z"
> }
>```
> ## Sem token / token inválido
>> ## Formato da resposta:
>  
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "Missing authorization headers"
> }
>```
> ## Id inválido
>> ## Formato da resposta:
>  
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "User not found"
> }
>```
> ## Atualizando outro usuário sem ser administrador
>> ## Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "User is not admin"
> }
>```
> ## Atualizando outros campos
>> ## Formato da resposta:
>
> * Status: `400 BAD REQUEST`;
>
>```json
> {
>   "message": "Only the name, email and password fields can be changed"
> }
>```
>---

<br>

> # Delete User - DELETE `/users/:id-user`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas o `administrador` pode deletar `outros usuários`;
> 
>> ## Formato da resposta:
>
> * Propriedade isActive passa para `false`;
> * Status: `204 NO CONTENT`;
>
> ## Sem token / token inválido
>> ## Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "Missing authorization headers"
> }
>```
> ## Id inválido | Usuário que já está desativado - `(IsActive = false)`
>> ## Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "User not found"
> }
>```
> ## Deletando outro usuário sem ser administrador
>> ## Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>
>```json
> {
>   "message": "User is not admin"
> }
>```
>---

<br>

---
---

<br>

> # Login - POST `/login`
>> ## Formato da requisição:
>>
> * Necessário usuário estar ativo - `isActive = true`
>>
>```json
> {
>   "email": "naiane.reis@mail.com",
>   "password": "3256"
> }
>```
>> ## Formato da resposta:
>
> * Status: `200 OK`;
>>
>```json
> {
>   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6dHJ1ZSwiaXNBY3RpdmUiOnRydWUsImlhdCI6MTY2NzE0OTIzNiwiZXhwIjoxNjY3MjM1NjM2LCJzdWIiOiI3YTZiNTk0MS04YjdjLTQyZjItYWYyZC1jODAxNjMzYjdhNWYifQ.QYCFK6a9u-3cUkNgZ9yo5NmCBQ3afyutsRqDeO-_b_M"
> }
>```
> ## E-mail ou senha inválidos
>> ## Formato da resposta:
>
> * Status: `403 FORBIDDEN`;
>
>```json
> {
>   "message": "Invalid e-mail or password"
> }
>```
> ## Enviando outros campos
>> ## Formato da resposta:
>
> * Status: `400 BAD REQUEST`;
>
>```json
> {
>   "message": "Only the email and password can be send"
> }
>```
>---

<br>
