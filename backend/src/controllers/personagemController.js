const Personagem = require('../models/Personagem');

async function listarPersonagens(req, res) {
  try {
    const personagens = await Personagem.findAll({ order: [['createdAt', 'DESC']] });
    return res.json(personagens);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao listar personagens.' });
  }
}

async function buscarPersonagemPorId(req, res) {
  try {
    const personagem = await Personagem.findByPk(req.params.id);
    if (!personagem) {
      return res.status(404).json({ mensagem: 'Personagem não encontrado.' });
    }
    return res.json(personagem);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao buscar personagem.' });
  }
}

async function criarPersonagem(req, res) {
  try {
    const { nome, descricao, nivelBobice, foto } = req.body;
    const personagem = await Personagem.create({ nome, descricao, nivelBobice, foto });
    return res.status(201).json(personagem);
  } catch (error) {
    return res.status(400).json({ mensagem: 'Erro ao criar personagem.', erro: error.message });
  }
}

async function atualizarPersonagem(req, res) {
  try {
    const { nome, descricao, nivelBobice, foto } = req.body;
    const personagem = await Personagem.findByPk(req.params.id);

    if (!personagem) {
      return res.status(404).json({ mensagem: 'Personagem não encontrado.' });
    }

    await personagem.update({ nome, descricao, nivelBobice, foto });
    return res.json(personagem);
  } catch (error) {
    return res.status(400).json({ mensagem: 'Erro ao atualizar personagem.', erro: error.message });
  }
}

async function deletarPersonagem(req, res) {
  try {
    const personagem = await Personagem.findByPk(req.params.id);

    if (!personagem) {
      return res.status(404).json({ mensagem: 'Personagem não encontrado.' });
    }

    await personagem.destroy();
    return res.json({ mensagem: 'Personagem removido com sucesso.' });
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro ao deletar personagem.' });
  }
}

module.exports = {
  listarPersonagens,
  buscarPersonagemPorId,
  criarPersonagem,
  atualizarPersonagem,
  deletarPersonagem,
};