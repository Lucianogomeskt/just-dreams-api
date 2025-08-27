const express = require('express');
const router = express.Router();
const db = require('../config/db'); // sua conexão com o MySQL

// POST /just-dreams-backend/turma
router.post('/', (req, res) => {
  const { codigo, nome } = req.body;

  if (!codigo || !nome) {
    return res.status(400).json({ erro: 'Código e nome da turma são obrigatórios' });
  }

  const query = 'INSERT INTO turmas (codigo, nome) VALUES (?, ?)';
  db.query(query, [codigo, nome], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao criar turma' });
    }
    res.status(201).json({ mensagem: 'Turma criada com sucesso', id: result.insertId });
  });
});

// GET /just-dreams-backend/turma
router.get('/', (req, res) => {
  const query = 'SELECT * FROM turmas';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: 'Erro ao listar turmas' });
    }
    res.json(results);
  });
});

module.exports = router;
