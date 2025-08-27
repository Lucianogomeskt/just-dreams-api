const express = require('express');
const cors = require('cors');

const alunoRoutes = require('./routes/aluno');
const turmaRoutes = require('./routes/turma');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/just-dreams-backend/aluno', alunoRoutes);
app.use('/just-dreams-backend/turma', turmaRoutes);

// Rota principal
app.get('/', (req, res) => {
  res.send('🚀 API Just Dreams rodando! Endpoints: /just-dreams-backend/aluno e /just-dreams-backend/turma');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Servidor ouvindo em http://localhost:${PORT}`);
});
