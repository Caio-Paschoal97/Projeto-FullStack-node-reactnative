const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'bob_sponja_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false, // Desativa logs repetitivos de SQL no terminal
  }
);

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log('MySQL conectado com sucesso via Sequelize!');
    
    // O sync() garante que as tabelas sejam criadas automaticamente se não existirem
    await sequelize.sync({ alter: true }); 
  } catch (error) {
    console.error('Erro ao conectar no MySQL:', error.message);
    process.exit(1);
  }
}

module.exports = { sequelize, connectDatabase };