"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mines = void 0;
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
const Concessions_1 = require("./Concessions");
class Mines extends sequelize_1.Model {
}
exports.Mines = Mines;
Mines.init({
    id_mines: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    longitude: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    latitude: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    id_concessions: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'consessions',
            key: 'id_concessions'
        }
    },
}, {
    sequelize: database_1.sequelize,
    tableName: "mines",
    timestamps: false
});
Mines.hasOne(Concessions_1.Concessions, { foreignKey: "id_concessions" });
Concessions_1.Concessions.belongsTo(Mines, { foreignKey: "id_concessions" });
