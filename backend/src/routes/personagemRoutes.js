const express = require('express');
const personagemController = require('../controllers/personagemController');
const router = express.Router();

router.get('/personagens', personagemController.listarPersonagens);
router.get('/personagens/:id', personagemController.buscarPersonagemPorId);
router.post('/personagens', personagemController.criarPersonagem);
router.put('/personagens/:id', personagemController.atualizarPersonagem);
router.delete('/personagens/:id', personagemController.deletarPersonagem);

module.exports = router;