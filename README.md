# Teste Simbi

- Trata-se de o desenvolvimento de uma API de listagem de Projetos e o consumo da mesma em uma aplicação REACT.

# Instruções para rodar o projeto <a name="instrucoes"></a>

### Será necessário ter instalado na sua máquina:

```
Git
PHP
Bootstrap
Node v6.0.0^
```

- Clone o repositório com o comando **git clone**:

```
git clone https://github.com/TaianeM/api-simbi
```







- Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize os seguintes comandos:

```
npm install
npm up
composer install
composer up
```

- Será necessário criar o arquivo "env", para especificar as credenciais do banco de dados e gerar a chave da aplicação, utilize os seguintes comandos:

```
copy .env.example .env 
php artisan key:generate
```



- Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **php artisan serve** para subir o **backend** e para rodar o front é o comando **npm run dev**:
**OBS: Necessário abrir 2 terminais, um para cada comando**

```
php artisan serve
npm run dev
```

## Estilização

Para realizar a estilização, foi utilizado a biblioteca [**React-Bootstrap**](https://react-bootstrap.netlify.app/).

# Resultado <a name="resultado"></a>

<h3>  * Tela Inicial </h3>
<h2> ** url: http://127.0.0.1:8000/ **

 ![Cards de Projetos](https://user-images.githubusercontent.com/66003232/169416747-91dc9be5-60c5-48fc-a00a-746fb7bec237.png)
 
<h3> * Tela Inicial + Botão Ver Todos. </h3>
 
![Card de Projetos + Ver Todos](https://user-images.githubusercontent.com/66003232/169417600-22db0908-de3a-43e1-b99e-f5860a8faf8a.png)

<h3> * Documentação Swagger. </h3>
<h2> url: http://127.0.0.1:8000/api/documentation

![Swagger - Laravel](https://user-images.githubusercontent.com/66003232/169417703-ef7186cc-de96-4c1d-a63a-a86d34863460.png)

<h3> * API - Listagem Projetos.
<h2> url: http://127.0.0.1:8000/api/projetos

![API - Listagem PHP](https://user-images.githubusercontent.com/66003232/169418734-b81fabba-c55c-4f1a-9d7d-22dcc3a49bcc.png)



