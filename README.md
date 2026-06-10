# 🧽 Fenda do Biquíni — Projeto FullStack

Aplicação fullstack temática de **Bob Esponja** para gerenciamento de personagens da Fenda do Biquíni. O projeto é composto por uma **API REST** construída com Node.js + Express + MySQL (via Sequelize) e um app mobile em **React Native**.

---

## 📁 Estrutura do Projeto

```
Projeto-FullStack-java-reactnative-main/
├── backend/                    # API REST (Node.js + Express + MySQL)
│   └── src/
│       ├── config/
│       │   └── database.js     # Configuração do Sequelize + MySQL
│       ├── controllers/
│       │   └── personagemController.js  # Lógica das rotas
│       ├── models/
│       │   └── Personagem.js   # Model do Sequelize
│       ├── routes/
│       │   └── personagemRoutes.js      # Definição das rotas
│       └── server.js           # Entrypoint da aplicação
└── Fenda-Do-Biquini/           # App mobile (React Native)
```

---

## 🚀 Tecnologias

### Backend
| Tecnologia | Versão | Finalidade |
|---|---|---|
| Node.js | — | Runtime JavaScript |
| Express | ^4.21.2 | Framework HTTP |
| Sequelize | ^6.37.8 | ORM para MySQL |
| MySQL2 | ^3.22.5 | Driver do banco de dados |
| dotenv | ^16.4.7 | Gerenciamento de variáveis de ambiente |
| cors | ^2.8.5 | Liberação de Cross-Origin |
| nodemon | ^3.1.9 | Hot reload em desenvolvimento |

### Mobile
- React Native

---

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js instalado
- MySQL rodando localmente (ou em servidor remoto)
- Banco de dados criado (padrão: `bob_sponja_db`)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/Projeto-FullStack-java-reactnative.git
cd Projeto-FullStack-java-reactnative
```

### 2. Configure o Backend

```bash
cd backend
npm install
```

Crie o arquivo `.env` na raiz da pasta `backend/`:

```env
PORT=3000
DB_HOST=localhost
DB_NAME=bob_sponja_db
DB_USER=root
DB_PASS=sua_senha
```

> As tabelas são criadas automaticamente pelo Sequelize com `sync({ alter: true })` na primeira execução.

### 3. Inicie o servidor

```bash
# Modo desenvolvimento (com hot reload)
npm run dev

# Modo produção
npm start
```

O servidor estará disponível em: `http://localhost:3000`

---

## 📡 Endpoints da API

Base URL: `http://localhost:3000/api`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/personagens` | Lista todos os personagens |
| `GET` | `/personagens/:id` | Busca um personagem por ID |
| `POST` | `/personagens` | Cria um novo personagem |
| `PUT` | `/personagens/:id` | Atualiza um personagem existente |
| `DELETE` | `/personagens/:id` | Remove um personagem |

### Exemplo de corpo para `POST` e `PUT`

```json
{
  "nome": "Bob Esponja",
  "descricao": "Esponja otimista que trabalha na Siri Cascudo.",
  "nivelBobice": 9,
  "foto": "https://url-da-imagem.com/bob.png"
}
```

### Campos do modelo `Personagem`

| Campo | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `nome` | String | ✅ | Nome do personagem |
| `descricao` | Text | ✅ | Descrição do personagem |
| `nivelBobice` | Integer (0–10) | ✅ | Nível de bobice (escala de 0 a 10) |
| `foto` | Text (long) | ❌ | URL ou Base64 da imagem |

---

## 🗂️ Exemplo de Resposta

```json
{
  "id": 1,
  "nome": "Patrick Estrela",
  "descricao": "Melhor amigo do Bob, mora embaixo de uma pedra.",
  "nivelBobice": 10,
  "foto": null,
  "createdAt": "2026-06-10T12:00:00.000Z",
  "updatedAt": "2026-06-10T12:00:00.000Z"
}
```

---

## 📱 App Mobile (React Native)

O frontend mobile está localizado na pasta `Fenda-Do-Biquini/` e consome a API REST do backend para listar, cadastrar, editar e remover personagens.

```bash
cd Fenda-Do-Biquini
npm install
npx expo start   # ou npx react-native run-android / run-ios
```

> Certifique-se de que a URL base da API no app aponta para o IP correto da máquina rodando o backend (em dispositivos físicos, `localhost` não funciona — use o IP local da rede, ex: `http://192.168.x.x:3000`).

---

## 🛠️ Scripts Disponíveis (Backend)

```bash
npm run dev    # Inicia com nodemon (desenvolvimento)
npm start      # Inicia com node (produção)
```

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.
