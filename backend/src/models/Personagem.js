const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Personagem = sequelize.define('Personagem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nivelBobice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 10,
    },
  },
  foto: {
    type: DataTypes.TEXT('long'), // Mantém suporte a URLs longas ou Base64
    allowNull: true,              // Permite que fique vazio no banco
  },
}, {
  timestamps: true, // Cria automaticamente createdAt e updatedAt
});

module.exports = Personagem;