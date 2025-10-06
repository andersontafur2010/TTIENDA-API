// models/index.js
const { Sequelize, DataTypes } = require('sequelize');

// Tomamos la URL completa desde las variables de entorno
const connectionString = process.env.MYSQL_PUBLIC_URL;

// Si no existe, lanzamos error
if (!connectionString) {
  console.error("❌ No se encontró la variable MYSQL_PUBLIC_URL");
  process.exit(1);
}

// Conexión con Sequelize
const sequelize = new Sequelize(connectionString, {
  dialect: 'mysql',
  logging: false, // cambiar a true si quieres ver queries en consola
});

// Definimos el modelo Product
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    defaultValue: 0.00
  }
}, {
  tableName: 'products',
  timestamps: false
});

module.exports = { sequelize, Product };
