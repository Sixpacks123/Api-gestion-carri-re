"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addresses = void 0;
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
class Addresses extends sequelize_1.Model {
}
exports.Addresses = Addresses;
Addresses.init({
    id_addresses: {
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
