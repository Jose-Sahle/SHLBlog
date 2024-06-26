# SHLBlog

Na tela de Login os dados são:

Username: "usuario"
Password: "passwd"


# Estrutura de Diretórios do Projeto

Abaixo está a estrutura de diretórios do projeto Angular, organizada de forma a facilitar o entendimento e a navegação:

src/

|-- app/

|---|-- components/

|---|---|--login/

|---|---|--notifications/

|---|---|--post-editor/

|---|---|--register/


|---|-- home/

|---|-- models/

|---|-- nav-menu/

|---|-- services/

|-- assets/

|-- environments/


Cada diretório contém componentes e arquivos específicos para suas funcionalidades:

- **components/**: Diretório para componentes reutilizáveis, divididos por funcionalidade.
- **home/**: Componente da página inicial.
- **models/**: Definições de modelos de dados.
- **nav-menu/**: Componente de navegação.
- **services/**: Serviços para gerenciar as chamadas de API
- **assets/**: Recursos estáticos como imagens e estilos.
- **environments/**: Configurações específicas de ambientes de desenvolvimento e produção.


# Estrutura de Diretórios do Lado do Servidor

Abaixo está a estrutura de diretórios do projeto ASP.NET Core, organizada para uma compreensão clara de sua funcionalidade e organização:

Server/

|-- Properties/

|-- Controllers/

|---|-- AuthController.cs # Controlador para autenticação

|---|-- PostController.cs # Controlador para operações de posts

|-- Data/

|---|-- blog.db # Banco de dados SQLite

|-- Model/

|---|-- Post.cs # Modelo de dados para posts

|---|-- User.cs # Modelo de dados para usuários

|-- Services/

|---|-- WebSocketService.cs # Serviço para gerenciamento de conexões WebSocket


Descrição dos diretórios e arquivos:

- **Properties/**: Contém propriedades e configurações do projeto.
- **Controllers/**: Armazena os controladores que gerenciam as requisições HTTP.
  - `AuthController.cs`: Gerencia a autenticação de usuários.
  - `PostController.cs`: Gerencia criação e leitura de posts.
- **Data/**: Diretório para o banco de dados.
  - `blog.db`: Banco de dados SQLite usado para armazenar dados de usuários e posts.
- **Model/**: Definições de modelos de dados usados na aplicação.
  - `Post.cs`: Define a estrutura de dados para posts.
  - `User.cs`: Define a estrutura de dados para usuários.
- **Services/**: Serviços adicionais usados pelo aplicativo.
  - `WebSocketService.cs`: Serviço para manipulação de conexões WebSocket.

Esta estrutura facilita a manutenção e o desenvolvimento do projeto, proporcionando uma clara separação de responsabilidades dentro do código.

# User.cs
    [Table("Users")]
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }

# Post.cs
    [Table("Posts")]
    public class Post
    {
        public int PostId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public int UserId { get; set; }
        public User Username { get; set; }
    }
