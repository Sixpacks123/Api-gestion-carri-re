"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessions = void 0;
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
const Adresses_1 = require("./Adresses");
class Concessions extends sequelize_1.Model {
}
exports.Concessions = Concessions;
Concessions.init({
    id_concessions: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    siret: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    license: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
    id_adresses: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'adresses',
            key: 'id_adresses'
        }
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "concessions",
    timestamps: false
});
Concessions.hasOne(Adresses_1.Adresses, { foreignKey: "id_adresses" });
