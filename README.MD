# Projeto de Gerenciamento Hospitalar - CP5

## Aluno

*   **Nome:** Gustavo Tavares da Silva
*   **RM:** 562827
*   **Repositório:** [https://github.com/gustavaress/Checkpoint-5-1TDSPW.git](https://github.com/gustavaress/Checkpoint-5-1TDSPW.git)

---
Este é um sistema de gerenciamento hospitalar desenvolvido como parte do Checkpoint 5. A aplicação permite visualizar, cadastrar, editar e excluir funcionários, utilizando uma interface moderna e reativa.

## Tecnologias Utilizadas

O projeto foi construído com um conjunto de tecnologias modernas para desenvolvimento web:

*   **React**: A biblioteca principal para a construção da interface de usuário, utilizando componentes reutilizáveis e o conceito de estado (`useState`, `useEffect`).
*   **TypeScript**: Adiciona tipagem estática ao JavaScript, aumentando a segurança e a manutenibilidade do código em componentes e tipos de dados.
*   **Vite**: Um build tool de última geração que oferece um ambiente de desenvolvimento extremamente rápido com Hot Module Replacement (HMR).
*   **Tailwind CSS**: Um framework CSS "utility-first" para a criação rápida de designs customizados. A estilização é centralizada em `src/globals.css` usando a diretiva `@apply` para criar componentes de UI semânticos.
*   **React Router DOM**: Utilizado para gerenciar a navegação e o roteamento entre as diferentes páginas da aplicação (Home, Funcionários, etc.).
*   **JSON-Server**: Usado para simular uma API RESTful. Ele serve um arquivo `db.json` para permitir operações de CRUD (Create, Read, Update, Delete) nos dados dos funcionários.

## Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

*   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
*   [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### 1. Clonar o Repositório

```bash
git clone https://github.com/gustavaress/Checkpoint-5-1TDSPW.git
cd projeto-cp5
```

### 2. Instalar as Dependências

Instale as dependências do projeto usando seu gerenciador de pacotes preferido:

```bash
# Com npm
npm install

# Ou com Yarn
yarn
```

### 3. Iniciar a API Falsa (JSON-Server)

Em um terminal, inicie o servidor que irá simular a API, servindo os dados do arquivo `db.json`:

```bash
npm run server
```

O servidor estará disponível em `http://localhost:3000`.

### 4. Iniciar a Aplicação React

Em **outro terminal**, inicie o servidor de desenvolvimento do Vite:

```bash
npm run dev
```

A aplicação estará acessível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).
