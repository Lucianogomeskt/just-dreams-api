const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Conexão com MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "justdreams"
});

// POST /just-dreams-backend/aluno
router.post('/', (req, res) => {
  const { nome, idade, turmaCodigo } = req.body;

  const sql = 'INSERT INTO aluno (nome, idade, turmaCodigo) VALUES (?, ?, ?)';
  db.query(sql, [nome, idade, turmaCodigo], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erro ao criar aluno' });
    }
    res.status(201).json({ message: 'Aluno criado com sucesso!', id: result.insertId });
  });
});

// GET /just-dreams-backend/aluno
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM aluno';
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erro ao listar alunos' });
    }
    res.json(results);
  });
});

module.exports = router;
