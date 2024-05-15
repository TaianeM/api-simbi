# Teste Simbi

- Trata-se do desenvolvimento de uma API de listagem de Projetos e o consumo da mesma em uma aplicação REACT.

# Instruções para rodar o projeto <a name="instrucoes"></a>

### Será necessário ter instalado na sua máquina:

```
Git
PHP
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
<h2> * url: http://127.0.0.1:8000/ *

![Cards de Projetos](https://github.com/TaianeM/api-simbi/assets/66003232/86efabbd-8c79-4fa1-8ab4-021655f32468)
 
<h3> * Tela Inicial + Botão Ver Todos. </h3>
 
![image](https://github.com/TaianeM/api-simbi/assets/66003232/bd716dc7-9128-483d-be5e-e0b725c412e3)
![image](https://github.com/TaianeM/api-simbi/assets/66003232/1c3f8f85-f45f-4c8e-9890-20f4555a5941)


<h3> * Documentação Swagger. </h3>
<h2> url: http://127.0.0.1:8000/api/documentation

![image](https://github.com/TaianeM/api-simbi/assets/66003232/a1ab66e3-b0ff-4dfc-a3f0-263fa7e9ff84)
![image](https://github.com/TaianeM/api-simbi/assets/66003232/48166eb6-6dd5-44e4-bc67-20c4078bcfd6)

<h3> * API - Listagem Projetos.
<h2> url: http://127.0.0.1:8000/api/projetos

![image](https://github.com/TaianeM/api-simbi/assets/66003232/55c01bf5-d6b3-4ff2-a6c3-35beec2302c4)



