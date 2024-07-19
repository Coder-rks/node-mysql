const Sequelize = require('sequelize');
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const db: any = {};
const env = process.env.NODE_ENV || 'development';
const config = require("../config/config.json")[env];

let sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
    .readdirSync(__dirname)
    .filter((file: any) => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file: any) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
