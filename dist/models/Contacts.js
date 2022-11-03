"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
const database_1 = require("../config/database");
const sequelize_1 = require("sequelize");
const Concessions_1 = require("./Concessions");
class Contacts extends sequelize_1.Model {
}
exports.Contacts = Contacts;
Contacts.init({
    id_contacts: {
        type: sequelize_1.DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    mail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
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
    tableName: "contacts",
    timestamps: false
});
Contacts.hasOne(Concessions_1.Concessions, { foreignKey: "id_concessions" });
Concessions_1.Concessions.belongsTo(Contacts, { foreignKey: "id_concessions" });
