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
> * O `email` e `CPF` devem ser únicos;
> * Todos os campos são `obrigatórios`;
> * A chave `isAdm` tem por padrao um valor booleando `false`, só alteramos ele para `true` nos administradores 
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
>   "isAdm": true,
>   "cep": "26.206-000",
>   "state": "RJ",
>   "city": "Volta Redonda",
>   "street": "Rua das Laranjeiras",
>   "number": "105", 
>   "complement": "Próximo a quadra"
> }
>```
>
>> ## Formato da resposta:
>
> * Status: `201 CREATED`;
> * A `password` do usuário deve ser armazenada como `hash` e `não deve ser retornada` na resposta;
>
>```json
>{
>	"name": "Admin",
>	"email": "admin@mail.com",
>	"cpf": "123.456.789-12",
>	"phone": "24999123456",
>	"birthday": "01/01/90",
>	"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>	"advertiser": false,
>	"address": {
>		"id": "65da75f6-092a-4bd4-a2d8-90b07aa15944",
>		"cep": "26.206-000",
>		"state": "RJ",
>		"city": "Volta Redonda",
>		"street": "Rua das Laranjeiras",
>		"number": "105",
>		"complement": "Próximo a quadra",
>		"createdAt": "2023-02-28T13:29:43.622Z",
>		"updatedAt": "2023-02-28T13:29:43.622Z"
>	},
>	"newPassrwordCode": null,
>	"id": "b8e243b1-bcfc-4c84-a9b3-8d5ac356d55f",
>	"isActive": true,
>	"isAdm": true,
>	"createdAt": "2023-02-28T13:29:43.728Z",
>	"updatedAt": "2023-02-28T13:29:43.728Z"
>}
>```
> ## E-mail já cadastrado
>> ## Formato da resposta:
>
> * Status: `409 CONFLICT`;
>
>```json
>
> {
>   "message": "E-mail already exists"
> }
>```
> ## CPF já cadastrado
>> ## Formato da resposta:
>
> * Status: `409 CONFLICT`;
>
>```json
> {
>   "message": "CPF already exists"
> }
>```
>---

<br>

> # Profile User - GET `/users/profile`
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
>{
>	"id": "078beee5-c3f6-411f-8af5-93c9a6fd2d0e",
>	"name": "Admin",
>	"email": "admin@mail.com",
>	"cpf": "123.456.789-12",
>	"phone": "24999123456",
>	"birthday": "01/01/90",
>	"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>	"advertiser": false,
>	"newPassrwordCode": null,
>	"isActive": true,
>	"isAdm": true,
>	"createdAt": "2023-02-23T23:24:24.744Z",
>	"updatedAt": "2023-02-23T23:24:24.744Z",
>	"address": {
>		"id": "65da75f6-092a-4bd4-a2d8-90b07aa15944",
>		"cep": "26.206-000",
>		"state": "RJ",
>		"city": "Volta Redonda",
>		"street": "Rua das Laranjeiras",
>		"number": "105",
>		"complement": "Próximo a quadra",
>		"createdAt": "2023-02-28T13:29:43.622Z",
>		"updatedAt": "2023-02-28T13:29:43.622Z"
>	},
>	"ads": [],
>	"comments": []
>}
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
> * Apenas o `administrador` pode ver os dados de outro `administrador` e de usuário desativados - `(isActive = false)`;
>
>> ## Formato da resposta:
>
> * Status: `200 OK`;
> * A `password` do usuário `não deve ser retornada` na resposta;
>
>```json
>{
>	"id": "0f4a8191-e40f-47ee-89a6-13a86cfb56c5",
>	"name": "Anunciante 1",
>	"email": "anunciante.1@mail.com",
>	"cpf": "753.952.901.62",
>	"phone": "24992654895",
>	"birthday": "22/05/85",
>	"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>	"advertiser": false,
>	"newPassrwordCode": null,
>	"isActive": true,
>	"isAdm": false,
>	"createdAt": "2023-02-23T23:30:49.524Z",
>	"updatedAt": "2023-02-23T23:30:49.524Z",
>	"address": {
>		"id": "23dvb5f6-092a-4bd4-a2d8-b56c5aa113a8",
>		"cep": "28.125-000",
>		"state": "RJ",
>		"city": "Piraí",
>		"street": "E",
>		"number": "208",
>		"complement": "Em frente ao mercado",
>		"createdAt": "2023-02-28T13:29:43.622Z",
>		"updatedAt": "2023-02-28T13:29:43.622Z"
>	},
>	"ads": [],
>	"comments": []
>}
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
>
>> ## Formato da resposta:
>
> * Status: `200 OK`;
> * A `password` dos usuários `não deve ser retornada` na resposta;
> * Caso o usuário logado `não seja` administrador, usuários `administradores` e `desativados` não serão retornados;
>
>```json
>[
>	{
>		"id": "e8182885-f71a-42c8-94fe-4ca1ab04308c",
>		"name": "Comprador 1",
>		"email": "comprador.1@mail.com",
>		"cpf": "256.156.327.12",
>		"phone": "24992654895",
>		"birthday": "24/05/87",
>		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>		"advertiser": false,
>		"newPassrwordCode": null,
>		"isActive": true,
>		"isAdm": false,
>		"createdAt": "2023-02-23T23:30:56.512Z",
>		"updatedAt": "2023-02-23T23:30:56.512Z",
>		"address": {
>		  "id": "65da75f6-092a-4bd4-a2d8-90b07aa265845",
>		  "cep": "26.225-000",
>		  "state": "RJ",
>		  "city": "Volta Redonda",
>		  "street": "Avenida Amaral Peixoto",
>		  "number": "140",
>		  "complement": "Aptr. 1",
>		  "createdAt": "2023-02-28T13:29:43.622Z",
>		  "updatedAt": "2023-02-28T13:29:43.622Z"
>		}
>	},
>	{
>		"id": "0f4a8191-e40f-47ee-89a6-13a86cfb56c5",
>		"name": "Anunciante 1",
>		"email": "anunciante.1@mail.com",
>		"cpf": "753.952.901.62",
>		"phone": "24992654895",
>		"birthday": "22/05/85",
>		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>		"advertiser": false,
>		"newPassrwordCode": null,
>		"isActive": true,
>		"isAdm": false,
>		"createdAt": "2023-02-23T23:30:49.524Z",
>		"updatedAt": "2023-02-23T23:30:49.524Z",
>		"address": {
>		  "id": "23dvb5f6-092a-4bd4-a2d8-b56c5aa113a8",
>		  "cep": "28.125-000",
>		  "state": "RJ",
>		  "city": "Piraí",
>		  "street": "E",
>		  "number": "208",
>		  "complement": "Em frente ao mercado",
>		  "createdAt": "2023-02-28T13:29:43.622Z",
>		  "updatedAt": "2023-02-28T13:29:43.622Z"
>		}
>	},
>	{
>		"id": "078beee5-c3f6-411f-8af5-93c9a6fd2d0e",
>		"name": "Admin",
>		"email": "admin1@mail.com",
>		"cpf": "123.456.789-12",
>		"phone": "24999123456",
>		"birthday": "01/01/90",
>		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>		"advertiser": false,
>		"newPassrwordCode": null,
>		"isActive": true,
>		"isAdm": true,
>		"createdAt": "2023-02-23T23:24:24.744Z",
>		"updatedAt": "2023-02-23T23:24:24.744Z",
>		"address": {
>		  "id": "65da75f6-092a-4bd4-a2d8-90b07aa15944",
>		  "cep": "26.206-000",
>		  "state": "RJ",
>		  "city": "Volta Redonda",
>		  "street": "Rua das Laranjeiras",
>		  "number": "25",
>		  "complement": "Próximo a quadra",
>		  "createdAt": "2023-02-28T13:29:43.622Z",
>		  "updatedAt": "2023-02-28T13:29:43.622Z"
>		}
>	}
>]
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
>---

<br>

> # Update User - PATCH `/users/:id-user`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas o `administrador` pode atualizar `outros usuários`;
> * Apenas os campos de `name`, `email`, `cpf`, `phone`, `birthday`, `description` e `password` podem ser alterados;
>  
>```json
>{
>	"name": "Anunciante Atualizado",
>	"email": "anunciante.atualizado@mail.com",
>	"cpf": "111.222.333.44",
>	"phone": "22981458595",
>	"birthday": "22/05/85",
>	"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>	"password": "123456"
>}
>```
>> ## Formato da resposta:
>
> * Status: `200 OK`;  
> * A `password` do usuário `não deve ser retornada` na resposta;
>
>```json
>{
>	"id": "e8182885-f71a-42c8-94fe-4ca1ab04308c",
>	"name": "Anunciante Atualizado",
>	"email": "anunciante.atualizado@mail.com",
>	"cpf": "111.222.333.44",
>	"phone": "22981458595",
>	"birthday": "22/05/85",
>	"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>	"advertiser": false,
>	"newPassrwordCode": null,
>	"isActive": true,
>	"isAdm": false,
>	"createdAt": "2023-02-23T23:30:56.512Z",
>	"updatedAt": "2023-02-23T23:49:51.609Z",
>	"address": {
>	  "id": "23dvb5f6-092a-4bd4-a2d8-b56c5aa113a8",
>	  "cep": "28.125-000",
>	  "state": "RJ",
>	  "city": "Piraí",
>	  "street": "E",
>	  "number": "208",
>	  "complement": "Em frente ao mercado",
>	  "createdAt": "2023-02-28T13:29:43.622Z",
>	  "updatedAt": "2023-02-28T13:29:43.622Z"
>	}
>	"ads": [],
>	"comments": []
>}
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
> ## Atualizando outro usuário sem ser `administrador`
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

> # SoftDelete User - DELETE `/users/desactive/:id-user`
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
> ## Id inválido:
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

> # Delete User - DELETE `/users/:id-user`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas o `administrador` pode deletar `outros usuários`;
> 
>> ## Formato da resposta:
>
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
> ## Id inválido:
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

> # Create Address - POST `/address`
>> ## Formato da requisição:
>
> * Todos os campos são `obrigatórios`;
> * A criação do `address` de um `user` é feita em na criação de usuário;
>
>```json
> {
>	 "cep": "26.206-000",
>	 "state": "RJ",
>	 "city": "Volta Redonda",
>	 "street": "Rua das Laranjeiras",
>	 "number": "105",
>	 "complement": "Próximo a quadra"
> }
>```
>
>> ## Formato da resposta:
>
> * Status: `201 CREATED`;
>
>```json
>{
>	 "id": "65da75f6-092a-4bd4-a2d8-90b07aa15944",
>	 "cep": "26.206-000",
>	 "state": "RJ",
>	 "city": "Volta Redonda",
>	 "street": "Rua das Laranjeiras",
>	 "number": "105",
>	 "complement": "Próximo a quadra",
>	 "createdAt": "2023-02-28T13:29:43.622Z",
>	 "updatedAt": "2023-02-28T13:29:43.622Z"
>}
>```
>---

<br>

> # Retrieve Address - GET `/address/:id-address`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
>
>> ## Formato da resposta:
>
> * Status: `200 OK`;
>
>```json
>{
>	 "id": "23dvb5f6-092a-4bd4-a2d8-b56c5aa113a8",
>	 "cep": "28.125-000",
>	 "state": "RJ",
>	 "city": "Piraí",
>	 "street": "E",
>	 "number": "208",
>	 "complement": "Em frente ao mercado",
>	 "createdAt": "2023-02-28T13:29:43.622Z",
>	 "updatedAt": "2023-02-28T13:29:43.622Z"
>}
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
>   "message": "Address not found"
> }
>```
>---

<br>

> # List Address - GET `/address`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
>
>> ## Formato da resposta:
>
> * Status: `200 OK`;
>
>```json
>[
>	{
>		"id": "65da75f6-092a-4bd4-a2d8-90b07aa15944",
>		"cep": "27.185-000",
>		"state": "RJ",
>		"city": "Piraí",
>		"street": "E",
>		"number": "25",
>		"complement": "Próximo a quadra",
>		"createdAt": "2023-02-28T13:29:43.622Z",
>		"updatedAt": "2023-02-28T13:29:43.728Z"
>	},
>	{
>		"id": "06e8ee55-b412-4422-8c27-d4fcb8d3f253",
>		"cep": "27.185-000",
>		"state": "RJ",
>		"city": "Volta Redonda",
>		"street": "Rua das Laranjeiras",
>		"number": "205",
>		"complement": "",
>		"createdAt": "2023-02-28T17:31:35.873Z",
>		"updatedAt": "2023-02-28T17:31:36.042Z"
>	}
>]
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
>---

<br>

> # Update Address - PATCH `/address/:id-address`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas os campos de `cep`, `state`, `city`, `street`, `numer` e `complement` podem ser alterados;
>  
>```json
>{ 
>	 "cep": "27.200-000",
>	 "state": "SP",
>	 "city": "São Paulo",
>	 "street": "Avenida Paulista",
>	 "number": "123",
>	 "complement": "Próximo ao cruzamento"
>} 
>```
>> ## Formato da resposta:
>
> * Status: `200 OK`;  
>
>```json
>{ 
>	 "id": "65da75f6-092a-4bd4-a2d8-90b07aa15944",
>	 "cep": "27.200-000",
>	 "state": "SP",
>	 "city": "São Paulo",
>	 "street": "Avenida Paulista",
>	 "number": "123",
>	 "complement": "Próximo ao cruzamento",
>	 "createdAt": "2023-02-28T13:29:43.622Z",
>	 "updatedAt": "2023-02-28T17:38:04.131Z"
>} 
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
>   "message": "Address not found"
> }
>```
>---

<br>

> # Delete Address - DELETE `/address/:id-address`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> 
>> ## Formato da resposta:
>
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
> ## Id inválido:
>> ## Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "Address not found"
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
>{
>	"email": "comprador.1@mail.com",
>	"password": "1234"
>}
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
>---

<br>

---
---

<br>

> # Create Ad - POST `/ads`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Os campos `urlImage1` a `urlImage6` são opcionais;
>
>```json
>{
>	"typeAd": "Leilão",
>	"title": "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
>	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>	"year": 1990,
>	"mileage": 10000,
>	"price": "170.000,00",
>	"typeVehicle": "Carro",
>	"urlCoverImage": "https://image.jpg",
>	"urlImage1": "https://image.jpg",
>	"urlImage2": "https://image.jpg",
>	"urlImage3": "https://image.jpg",
>	"urlImage4": "https://image.jpg",
>	"urlImage5": "https://image.jpg",
>	"urlImage6": "https://image.jpg"
>}
>```
>
>> ## Formato da resposta:
>
> * Status: `201 CREATED`;
> * A `password` do usuário deve ser armazenada como `hash` e `não deve ser retornada` na resposta;
>
>```json
>{
>	"id": "a456b9ab-17d6-4040-87c1-30ff08619662",
>	"typeAd": "Leilão",
>	"title": "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
>	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>	"year": 1990,
>	"mileage": 10000,
>	"price": "170.000,00",
>	"isActive": true,
>	"typeVehicle": "Carro",
>	"urlCoverImage": "https://image.jpg",
>	"createdAt": "2023-02-24T01:18:07.506Z",
>	"updatedAt": "2023-02-24T01:18:07.506Z",
>	"gallery": {
>		"id": "dbc4c5d2-2bc4-44f2-b85c-ba1d54170f69",
>		"urlImage1": "https://image.jpg",
>		"urlImage2": "https://image.jpg",
>		"urlImage3": "https://image.jpg",
>		"urlImage4": "https://image.jpg",
>		"urlImage5": "https://image.jpg",
>		"urlImage6": "https://image.jpg",
>		"createdAt": "2023-02-24T01:18:07.473Z",
>		"updatedAt": "2023-02-24T01:18:07.506Z"
>	},
>	"user": {
>		"id": "64cae1d7-be4d-47f6-8ccf-75a49dbaebad",
>		"name": "Anunciante 1",
>		"email": "anunciante.1@mail.com",
>		"cpf": "753.952.901.62",
>		"phone": "24992654895",
>		"birthday": "22/05/85",
>		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>		"advertiser": false,
>		"password": "$2a$10$HtuifB.sdLG.2phhxJJHbOvDarVLbc.V7z8bqW8SIFWVO3sVz05rO",
>		"newPassrwordCode": null,
>		"isActive": true,
>		"isAdm": false,
>		"createdAt": "2023-02-24T01:14:15.324Z",
>		"updatedAt": "2023-02-24T01:14:15.324Z"
>	},
>	"comments": []
>}
>```
>---

<br>

> # List Ads - GET `/ads`
>> ## Formato da resposta:
>
> * Status: `200 OK`;
>
>```json
>[
>	{
>		"id": "a456b9ab-17d6-4040-87c1-30ff08619662",
>		"typeAd": "Leilão",
>		"title": "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
>		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>		"year": 1990,
>		"mileage": 10000,
>		"price": "170.000,00",
>		"isActive": true,
>		"typeVehicle": "Carro",
>		"urlCoverImage": "https://image.jpg",
>		"createdAt": "2023-02-24T01:18:07.506Z",
>		"updatedAt": "2023-02-24T01:18:07.506Z",
>		"gallery": {
>			"id": "dbc4c5d2-2bc4-44f2-b85c-ba1d54170f69",
>			"urlImage1": "https://image.jpg",
>			"urlImage2": "https://image.jpg",
>			"urlImage3": "https://image.jpg",
>			"urlImage4": "https://image.jpg",
>			"urlImage5": "https://image.jpg",
>			"urlImage6": "https://image.jpg",
>			"createdAt": "2023-02-24T01:18:07.473Z",
>			"updatedAt": "2023-02-24T01:18:07.506Z"
>		},
>		"user": {
>			"id": "64cae1d7-be4d-47f6-8ccf-75a49dbaebad",
>			"name": "Anunciante 1",
>			"email": "anunciante.1@mail.com",
>			"cpf": "753.952.901.62",
>			"phone": "24992654895",
>			"birthday": "22/05/85",
>			"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>			"advertiser": false,
>			"password": "$2a$10$HtuifB.sdLG.2phhxJJHbOvDarVLbc.V7z8bqW8SIFWVO3sVz05rO",
>			"newPassrwordCode": null,
>			"isActive": true,
>			"isAdm": false,
>			"createdAt": "2023-02-24T01:14:15.324Z",
>			"updatedAt": "2023-02-24T01:14:15.324Z"
>		},
>		"comments": []
>	},
>	{
>		"id": "26dd6afe-029b-4784-b805-eeadf91930d1",
>		"typeAd": "Venda",
>		"title": "Fiat Mobi Trekking",
>		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>		"year": 2023,
>		"mileage": 0,
>		"price": "61.990,00",
>		"isActive": true,
>		"typeVehicle": "Carro",
>		"urlCoverImage": "https://image.jpg",
>		"createdAt": "2023-02-24T01:25:47.457Z",
>		"updatedAt": "2023-02-24T01:25:47.457Z",
>		"gallery": {
>			"id": "526f621e-84b3-4b06-b3d4-7af8844fbc0b",
>			"urlImage1": "",
>			"urlImage2": "",
>			"urlImage3": "",
>			"urlImage4": "",
>			"urlImage5": "",
>			"urlImage6": "",
>			"createdAt": "2023-02-24T01:25:47.429Z",
>			"updatedAt": "2023-02-24T01:25:47.457Z"
>		},
>		"user": {
>			"id": "64cae1d7-be4d-47f6-8ccf-75a49dbaebad",
>			"name": "Anunciante 1",
>			"email": "anunciante.1@mail.com",
>			"cpf": "753.952.901.62",
>			"phone": "24992654895",
>			"birthday": "22/05/85",
>			"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>			"advertiser": false,
>			"password": "$2a$10$HtuifB.sdLG.2phhxJJHbOvDarVLbc.V7z8bqW8SIFWVO3sVz05rO",
>			"newPassrwordCode": null,
>			"isActive": true,
>			"isAdm": false,
>			"createdAt": "2023-02-24T01:14:15.324Z",
>			"updatedAt": "2023-02-24T01:14:15.324Z"
>		},
>		"comments": []
>	}
>]
>```
>---

<br/>

> # Random Ads - GET `/ads/random`
>> ## Formato da resposta:
>
> * Status: `200 OK`;
> * Retorna até 20 `anúncios` aleatórios;
>
>```json
>[
>	{
>		"id": "a456b9ab-17d6-4040-87c1-30ff08619662",
>		"typeAd": "Leilão",
>		"title": "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
>		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>		"year": 1990,
>		"mileage": 10000,
>		"price": "170.000,00",
>		"isActive": true,
>		"typeVehicle": "Carro",
>		"urlCoverImage": "https://image.jpg",
>		"createdAt": "2023-02-24T01:18:07.506Z",
>		"updatedAt": "2023-02-24T01:18:07.506Z",
>		"gallery": {
>			"id": "dbc4c5d2-2bc4-44f2-b85c-ba1d54170f69",
>			"urlImage1": "https://image.jpg",
>			"urlImage2": "https://image.jpg",
>			"urlImage3": "https://image.jpg",
>			"urlImage4": "https://image.jpg",
>			"urlImage5": "https://image.jpg",
>			"urlImage6": "https://image.jpg",
>			"createdAt": "2023-02-24T01:18:07.473Z",
>			"updatedAt": "2023-02-24T01:18:07.506Z"
>		},
>		"user": {
>			"id": "64cae1d7-be4d-47f6-8ccf-75a49dbaebad",
>			"name": "Anunciante 1",
>			"email": "anunciante.1@mail.com",
>			"cpf": "753.952.901.62",
>			"phone": "24992654895",
>			"birthday": "22/05/85",
>			"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>			"advertiser": false,
>			"password": "$2a$10$HtuifB.sdLG.2phhxJJHbOvDarVLbc.V7z8bqW8SIFWVO3sVz05rO",
>			"newPassrwordCode": null,
>			"isActive": true,
>			"isAdm": false,
>			"createdAt": "2023-02-24T01:14:15.324Z",
>			"updatedAt": "2023-02-24T01:14:15.324Z"
>		},
>		"comments": []
>	},
>	{
>		"id": "26dd6afe-029b-4784-b805-eeadf91930d1",
>		"typeAd": "Venda",
>		"title": "Fiat Mobi Trekking",
>		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>		"year": 2023,
>		"mileage": 0,
>		"price": "61.990,00",
>		"isActive": true,
>		"typeVehicle": "Carro",
>		"urlCoverImage": "https://image.jpg",
>		"createdAt": "2023-02-24T01:25:47.457Z",
>		"updatedAt": "2023-02-24T01:25:47.457Z",
>		"gallery": {
>			"id": "526f621e-84b3-4b06-b3d4-7af8844fbc0b",
>			"urlImage1": "",
>			"urlImage2": "",
>			"urlImage3": "",
>			"urlImage4": "",
>			"urlImage5": "",
>			"urlImage6": "",
>			"createdAt": "2023-02-24T01:25:47.429Z",
>			"updatedAt": "2023-02-24T01:25:47.457Z"
>		},
>		"user": {
>			"id": "64cae1d7-be4d-47f6-8ccf-75a49dbaebad",
>			"name": "Anunciante 1",
>			"email": "anunciante.1@mail.com",
>			"cpf": "753.952.901.62",
>			"phone": "24992654895",
>			"birthday": "22/05/85",
>			"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>			"advertiser": false,
>			"password": "$2a$10$HtuifB.sdLG.2phhxJJHbOvDarVLbc.V7z8bqW8SIFWVO3sVz05rO",
>			"newPassrwordCode": null,
>			"isActive": true,
>			"isAdm": false,
>			"createdAt": "2023-02-24T01:14:15.324Z",
>			"updatedAt": "2023-02-24T01:14:15.324Z"
>		},
>		"comments": []
>	}
>]
>```
>---

<br/>

> # Retrieve User - GET `/ads/:id-ad`
>> ## Formato da resposta:
>
> * Status: `200 OK`;
>
>```json
>{
>	"id": "26dd6afe-029b-4784-b805-eeadf91930d1",
>	"typeAd": "Venda",
>	"title": "Fiat Mobi Trekking",
>	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>	"year": 2023,
>	"mileage": 0,
>	"price": "61.990,00",
>	"isActive": true,
>	"typeVehicle": "Carro",
>	"urlCoverImage": "https://image.jpg",
>	"createdAt": "2023-02-24T01:25:47.457Z",
>	"updatedAt": "2023-02-24T01:25:47.457Z",
>	"user": {
>		"id": "64cae1d7-be4d-47f6-8ccf-75a49dbaebad",
>		"name": "Anunciante 1",
>		"email": "anunciante.1@mail.com",
>		"cpf": "753.952.901.62",
>		"phone": "24992654895",
>		"birthday": "22/05/85",
>		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>		"advertiser": false,
>		"password": "$2a$10$HtuifB.sdLG.2phhxJJHbOvDarVLbc.V7z8bqW8SIFWVO3sVz05rO",
>		"newPassrwordCode": null,
>		"isActive": true,
>		"isAdm": false,
>		"createdAt": "2023-02-24T01:14:15.324Z",
>		"updatedAt": "2023-02-24T01:14:15.324Z"
>	},
>	"gallery": {
>		"id": "526f621e-84b3-4b06-b3d4-7af8844fbc0b",
>		"urlImage1": "",
>		"urlImage2": "",
>		"urlImage3": "",
>		"urlImage4": "",
>		"urlImage5": "",
>		"urlImage6": "",
>		"createdAt": "2023-02-24T01:25:47.429Z",
>		"updatedAt": "2023-02-24T01:25:47.457Z"
>	},
>	"comments": []
>}
>```
> ## Id inválido
>> ## Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>```json
> {
>   "message": "Ad not found"
> }
>```
>---

<br>

> # Update Ad - PATCH `/ads/:id-ad`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas os campos de `typeAd`, `title`, `description`, `year`, `mileage`, `price`, `typeVehicle`, `isActive`, `urlCoverImage` e `urlImage1` à `urlImage6` podem ser alterados;
> * Alterando a propriedade `isActive`, é possível atualizar o anúncio entre `publicado` e `não publicado`.
>  
>```json
>{
>	"typeAd": "Venda",
>	"title": "Fiat Mobi Trekking",
>	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>	"year": 2023,
>	"mileage": 0,
>	"price": "61.990,00",
>	"typeVehicle": "Carro",
>	"isActive": false,
>	"urlCoverImage": "https://image.jpg",
>	"urlImage1": "https://image.jpg",
>	"urlImage2": "https://image.jpg",
>	"urlImage3": "https://image.jpg",
>	"urlImage4": "https://image.jpg",
>	"urlImage5": "https://image.jpg",
>	"urlImage6": "https://image.jpg"
>}
>```
>> ## Formato da resposta:
>
> * Status: `200 OK`;  
>
>```json
>{
>	"id": "26dd6afe-029b-4784-b805-eeadf91930d1",
>	"typeAd": "Venda",
>	"title": "Fiat Mobi Trekking",
>	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>	"year": 2023,
>	"mileage": 0,
>	"price": "61.990,00",
>	"isActive": false,
>	"typeVehicle": "Carro",
>	"urlCoverImage": "https://image.jpg",
>	"createdAt": "2023-02-24T01:25:47.457Z",
>	"updatedAt": "2023-02-24T01:40:14.824Z",
>	"gallery": {
>		"id": "526f621e-84b3-4b06-b3d4-7af8844fbc0b",
>		"urlImage1": "",
>		"urlImage2": "",
>		"urlImage3": "",
>		"urlImage4": "",
>		"urlImage5": "",
>		"urlImage6": "",
>		"createdAt": "2023-02-24T01:25:47.429Z",
>		"updatedAt": "2023-02-24T01:25:47.457Z"
>	},
>	"user": {
>		"id": "64cae1d7-be4d-47f6-8ccf-75a49dbaebad",
>		"name": "Anunciante 1",
>		"email": "anunciante.1@mail.com",
>		"cpf": "753.952.901.62",
>		"phone": "24992654895",
>		"birthday": "22/05/85",
>		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>		"advertiser": false,
>		"password": "$2a$10$HtuifB.sdLG.2phhxJJHbOvDarVLbc.V7z8bqW8SIFWVO3sVz05rO",
>		"newPassrwordCode": null,
>		"isActive": true,
>		"isAdm": false,
>		"createdAt": "2023-02-24T01:14:15.324Z",
>		"updatedAt": "2023-02-24T01:14:15.324Z"
>	},
>	"comments": []
>}
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
>
> ## Id inválido
>> ## Formato da resposta:
>  
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "Ad not found"
> }
>```
>---

<br>

> # Delete Ad - DELETE `/ads/:id-ad`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> 
>> ## Formato da resposta:
>
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
> ## Id inválido:
>> ## Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "Ad not found"
> }
>```
>---

<br>

---
---

<br/>

> # Create Galery - POST `/galleries`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Os campos `urlImage1` a `urlImage6` são opcionais;
>
>```json
>{
>	"ad": "a456b9ab-17d6-4040-87c1-30ff08619662",
>	"urlImage1": "https://image.jpg",
>	"urlImage2": "https://image.jpg",
>	"urlImage3": "https://image.jpg",
>	"urlImage4": "https://image.jpg",
>	"urlImage5": "https://image.jpg",
>	"urlImage6": "https://image.jpg"
>}
>```
>
>> ## Formato da resposta:
>
> * Status: `201 CREATED`;
>
>```json
>{
>	"id": "dbc4c5d2-2bc4-44f2-b85c-ba1d54170f69",
>	"urlImage1": "https://image.jpg",
>	"urlImage2": "https://image.jpg",
>	"urlImage3": "https://image.jpg",
>	"urlImage4": "https://image.jpg",
>	"urlImage5": "https://image.jpg",
>	"urlImage6": "https://image.jpg",
>	"createdAt": "2023-02-24T01:18:07.473Z",
>	"updatedAt": "2023-02-24T01:18:07.506Z",
>	"ad": {
>	   "id": "a456b9ab-17d6-4040-87c1-30ff08619662",
>	   "typeAd": "Leilão",
>	   "title": "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
>	   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>	   "year": 1990,
>	   "mileage": 10000,
>	   "price": "170.000,00",
>	   "isActive": true,
>	   "typeVehicle": "Carro",
>	   "urlCoverImage": "https://image.jpg",
>	   "createdAt": "2023-02-24T01:18:07.506Z",
>	   "updatedAt": "2023-02-24T01:18:07.506Z"
>  }
>}
>```
>---

<br>

> # List Galleries - GET `/galleries`
>> ## Formato da resposta:
>
> * Status: `200 OK`;
>
>```json
>[
>	{
>		"id": "b6bebd98-e311-46cd-9d43-e5384679e1e2",
>		"urlImage1": "https://image.jpg",
>		"urlImage2": "https://image.jpg",
>		"urlImage3": "https://image.jpg",
>		"urlImage4": "",
>		"urlImage5": "",
>		"urlImage6": "",
>		"createdAt": "2023-03-01T12:54:01.967Z",
>		"updatedAt": "2023-03-01T12:54:01.993Z",
>		"ad": {
>			"id": "0c9add74-4158-4eee-b26e-16c58bf26390",
>			"typeAd": "Venda",
>			"title": "Fiat Mobi Trekking",
>			"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>			"year": 2023,
>			"mileage": 0,
>			"price": "60.000,00",
>			"isActive": true,
>			"typeVehicle": "Carro",
>			"urlCoverImage": "https://image.jpg",
>			"createdAt": "2023-03-01T12:54:01.993Z",
>			"updatedAt": "2023-03-01T12:54:01.993Z"
>		}
>	},
>	{
>		"id": "20968e64-8cf3-47ca-84c8-c6a0d3ca018a",
>		"urlImage1": "",
>		"urlImage2": "",
>		"urlImage3": "",
>		"urlImage4": "",
>		"urlImage5": "",
>		"urlImage6": "",
>		"createdAt": "2023-03-01T12:57:29.727Z",
>		"updatedAt": "2023-03-01T13:00:20.736Z",
>		"ad": {
>			"id": "08874c2d-e6c0-4ab7-9261-8130d1ae000b",
>			"typeAd": "Venda",
>			"title": "Fiat Mobi 2023",
>			"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>			"year": 2023,
>			"mileage": 0,
>			"price": "61.990,00",
>			"isActive": false,
>			"typeVehicle": "Carro",
>			"urlCoverImage": "https://image.jpg",
>			"createdAt": "2023-03-01T12:57:29.751Z",
>			"updatedAt": "2023-03-01T13:00:20.693Z"
>		}
>	},
>]
>```
>---

<br/>

> # Retrieve Gallery - GET `/galleries/:id-gallery`
>> ## Formato da resposta:
>
> * Status: `200 OK`;
>
>```json
>{
>	"id": "b6bebd98-e311-46cd-9d43-e5384679e1e2",
>	"urlImage1": "https://image.jpg",
>	"urlImage2": "https://image.jpg",
>	"urlImage3": "https://image.jpg",
>	"urlImage4": "",
>	"urlImage5": "",
>	"urlImage6": "",
>	"createdAt": "2023-03-01T12:54:01.967Z",
>	"updatedAt": "2023-03-01T12:54:01.993Z",
>	"ad": {
>		"id": "0c9add74-4158-4eee-b26e-16c58bf26390",
>		"typeAd": "Venda",
>		"title": "Fiat Mobi Trekking",
>		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>		"year": 2023,
>		"mileage": 0,
>		"price": "60.000,00",
>		"isActive": true,
>		"typeVehicle": "Carro",
>		"urlCoverImage": "https://image.jpg",
>		"createdAt": "2023-03-01T12:54:01.993Z",
>		"updatedAt": "2023-03-01T12:54:01.993Z"
>	}
>}
>```
> ## Id inválido
>> ## Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>```json
> {
>   "message": "Gallery not found"
> }
>```
>---

<br>

> # Update Gallery - PATCH `/galleries/:id-gallery`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas os campos de `urlImage1` à `urlImage6` podem ser alterados;
>  
>```json
>{
>	"urlImage1": "https://image.jpg",
>	"urlImage2": "https://image.jpg",
>	"urlImage3": "https://image.jpg",
>	"urlImage4": "https://image.jpg",
>	"urlImage5": "https://image.jpg",
>	"urlImage6": "https://image.jpg"
>}
>```
>> ## Formato da resposta:
>
> * Status: `200 OK`;  
>
>```json
>{
>	"id": "26dd6afe-029b-4784-b805-eeadf91930d1",
>	"urlImage1": "https://image.jpg",
>	"urlImage2": "https://image.jpg",
>	"urlImage3": "https://image.jpg",
>	"urlImage4": "https://image.jpg",
>	"urlImage5": "https://image.jpg",
>	"urlImage6": "https://image.jpg",
>	"createdAt": "2023-02-24T01:25:47.457Z",
>	"updatedAt": "2023-02-24T01:40:14.824Z",
>	"ad": {
>		"id": "0c9add74-4158-4eee-b26e-16c58bf26390",
>		"typeAd": "Venda",
>		"title": "Fiat Mobi Trekking",
>		"description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>		"year": 2023,
>		"mileage": 0,
>		"price": "60.000,00",
>		"isActive": true,
>		"typeVehicle": "Carro",
>		"urlCoverImage": "https://image.jpg",
>		"createdAt": "2023-03-01T12:54:01.993Z",
>		"updatedAt": "2023-03-01T12:54:01.993Z"
>	}
>}
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
>
> ## Id inválido
>> ## Formato da resposta:
>  
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "Gallery not found"
> }
>```
>---

<br>

> # Delete Gallery - DELETE `/galleries/:id-gallery`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> 
>> ## Formato da resposta:
>
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
> ## Id inválido:
>> ## Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "Gallery not found"
> }
>```
>---

<br>

---
---

<br/>

> # Create Comment - POST `/comment`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Todos os campos são `obrigatórios`;
>
>```json
> {
> 	"ad": "001f7a7d-6187-47b0-b762-4fa3360b8a62",
> 	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..."
> }
>```
>
>> ## Formato da resposta:
>
> * Status: `201 CREATED`;
>
>```json
>{
>  "id": "5a0847d4-31b1-43f2-a03f-dd4157577166",
>  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>  "createdAt": "2023-03-01T00:38:50.122Z",
>  "updatedAt": "2023-03-01T00:38:50.122Z",
>  "ad": {
>  	 "id": "001f7a7d-6187-47b0-b762-4fa3360b8a62",
>  	 "typeAd": "Venda",
>  	 "title": "Fiat Mobi Trekking",
>  	 "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>  	 "year": 2023,
>  	 "mileage": 0,
>  	 "price": "61.990,00",
>  	 "isActive": true,
>  	 "typeVehicle": "Carro",
>  	 "urlCoverImage": "https://image.jpg",
>  	 "createdAt": "2023-03-01T00:16:46.001Z",
>  	 "updatedAt": "2023-03-01T00:16:46.001Z"
>  },
>  "owner": {
>  	 "id": "cfb14fef-6dcf-4217-9419-07650d5ff61c",
>  	 "name": "Anunciante 1",
>  	 "email": "anunciante.1@mail.com",
>  	 "cpf": "753.952.901.63",
>  	 "phone": "24992654895",
>  	 "birthday": "22/05/85",
>  	 "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem reiciendis vero reprehenderit aut...",
>  	 "advertiser": true,
>  	 "newPassrwordCode": null,
>  	 "isActive": true,
>  	 "isAdm": false,
>  	 "createdAt": "2023-03-01T00:12:10.612Z",
>  	 "updatedAt": "2023-03-01T00:12:10.612Z"
>  }
>}
>```
>
> ## Sem token / token inválido
>> ## Formato da resposta:
>
> * Status: `401 UNAUTHORIZED`;
>```json
> {
>   "message": "Missing authorization headers"
> }
>```
>
> ## Id inválido
>> ## Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>```json
> {
>   "message": "Ad not found"
> }
>```
>---

<br>

> # Retrieve Comment - GET `/comment/:id-comment`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
>
>> ## Formato da resposta:
>
> * Status: `200 OK`;
>
>```json
>{
>  "id": "5a0847d4-31b1-43f2-a03f-dd4157577166",
>  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>  "createdAt": "2023-03-01T00:38:50.122Z",
>  "updatedAt": "2023-03-01T00:38:50.122Z"
>}
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
>   "message": "Comment not found"
> }
>```
>---

<br>

> # List Comments - GET `/comment`
>
> * Necessário autenticação por `token`;
>
>> ## Formato da resposta:
>
> * Status: `200 OK`;
>
>```json
>[
>	{
>		"id": "5a0847d4-31b1-43f2-a03f-dd4157577166",
>		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>		"createdAt": "2023-03-01T00:38:50.122Z",
>		"updatedAt": "2023-03-01T00:38:50.122Z"
>	},
>	{
>		"id": "212b374e-6e9a-4259-b158-7c0eaf540fd1",
>		"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
>		"createdAt": "2023-03-01T00:43:36.817Z",
>		"updatedAt": "2023-03-01T00:43:36.817Z"
>	}
>]
>
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
>---

<br>

> # Update Comment - PATCH `/comment/:id-comment`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> * Apenas o campo `description` pode ser alterado;
>  
>```json
>{
>   "description": "Comentário atualizado"
>}
>```
>> ## Formato da resposta:
>
> * Status: `200 OK`;  
>
>```json
>{
> 	"id": "5a0847d4-31b1-43f2-a03f-dd4157577166",
> 	"description": "Comentário atualizado",
> 	"createdAt": "2023-03-01T00:38:50.122Z",
> 	"updatedAt": "2023-03-01T00:52:43.347Z"
>}
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
>   "message": "Comment not found"
> }
>```
>---

<br>

> # Delete Comment - DELETE `/comment/:id-comment`
>> ## Formato da requisição:
>
> * Necessário autenticação por `token`;
> 
>> ## Formato da resposta:
>
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
> ## Id inválido:
>> ## Formato da resposta:
>
> * Status: `404 NOT FOUND`;
>
>```json
> {
>   "message": "Comment not found"
> }
>```
>---

<br>

---
---

<br>
