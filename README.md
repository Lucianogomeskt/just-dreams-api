 Just Dreams API

Este é o backend do projeto **Just Dreams**, desenvolvido como parte de um trabalho acadêmico. A API foi construída com Node.js, Express e MySQL, e é responsável por gerenciar dados de alunos e turmas.



 🚀 Tecnologias utilizadas

- Node.js
- Express
- MySQL
- MySQL2
- Nodemon
- CORS

📁 Estrutura do projeto

just-dreams-api/ 
├── config/ 
│   └── db.js
├── routes/ 
│ ├── aluno.js 
│ └── turma.js 
├── server.js 
├── package.json
└── README.md  

⚙️ Como rodar localmente

1. Clone o repositório:
git clone https://github.com/Lucianogomeskt/just-dreams-api.git
cd just-dreams-api

2. Instale as dependências:
npm install
Configure o banco de dados MySQL com as tabelas abaixo:

3.Configure o banco de dados MySQL com as tabelas abaixo:
CREATE TABLE turma (
  codigo VARCHAR(20) PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE aluno (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  idade INT NOT NULL,
  turmaCodigo VARCHAR(20),
  FOREIGN KEY (turmaCodigo) REFERENCES turma(codigo)
);

4.Configure o arquivo config/db.js com suas credenciais:
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'justdreams'
});

5.Inicie o servidor:
npm run dev
 
 
 Endpoints disponíveis
 Criar turma
POST /just-dreams-backend/turma

json
{
  "codigo": "TURMA123",
  "nome": "Turma de Teste"
}

 Criar aluno
POST /just-dreams-backend/aluno

json
{
  "nome": "Luciana",
  "idade": 20,
  "turmaCodigo": "TURMA123"
}

Listar alunos
GET /just-dreams-backend/aluno


Autor
Desenvolvido por Luciano Gomes Projeto acadêmico — Backend para sistema de gerenciamento de alunos e turmas.

📌 Status do projeto
✅ Funcional 🔧 Em desenvolvimento contínuo 📦 Pronto para testes e integração com frontend
