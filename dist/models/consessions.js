"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessions = void 0;
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
const Addresses_1 = require("./Addresses");
class Concessions extends sequelize_1.Model {
}
exports.Concessions = Concessions;
Concessions.init({
    id_consessions: {
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
    latitude: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
    longitude: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
    id_address: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'addresses',
            key: 'id_addresses'
        }
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "consessions",
    timestamps: false
});
Addresses_1.Addresses.hasOne(Consessions, { foreignKey: "id_address" });
