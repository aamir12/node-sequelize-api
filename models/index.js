const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('node_sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.contact = require('./contact')(sequelize,DataTypes);
db.user = require('./user')(sequelize,DataTypes,Model);

db.sequelize.sync({force:false});

module.exports = db;