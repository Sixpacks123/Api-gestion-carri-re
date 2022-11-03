"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresses = void 0;
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
class Adresses extends sequelize_1.Model {
}
exports.Adresses = Adresses;
Adresses.init({
    id_adresses: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    complement: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    zipcode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    town: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "addresses",
    timestamps: false
});
