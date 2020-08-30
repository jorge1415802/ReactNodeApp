const dbConfig = require('../../db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database.database,dbConfig.database.user,dbConfig.database.password,{
    host: dbConfig.database.host,
    dialect : dbConfig.database.dialect,
    operatorAliases: false,
    pool :{
        max: dbConfig.database.pool.max,
        min: dbConfig.database.pool.min,
        acquire: dbConfig.database.pool.acquire,
        idle: dbConfig.database.pool.acquire

    },

});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.images = require('./images.model.js')(sequelize,Sequelize);
module.exports = db;
