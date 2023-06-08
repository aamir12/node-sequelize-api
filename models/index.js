const { Sequelize, DataTypes, Model,Op } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
    logging:false //console.log, //function(str)=>{}, //or false, 
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

db.sequelize.sync({force:false}); //alter:true;
db.Op = Op;
module.exports = db;