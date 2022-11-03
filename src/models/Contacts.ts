import { sequelize } from '../config/database'
import {Model, DataTypes} from 'sequelize'
import {Adresses} from "./Adresses";
import { type } from 'os';
import { Concessions } from './Concessions';


export class Contacts extends Model{
    declare id_contacts: number;
    declare lastname: string;
    declare firstname: string;
    declare mail: string;
    declare phone: string;
    declare id_concessions: number;
}

Contacts.init({
    id_contacts: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false

    },
    lastname : {
        type: DataTypes.STRING,
        allowNull:false,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    mail: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    phone: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    id_concessions: {
        type: DataTypes.INTEGER,
        allowNull: false ,
        references: {
            model: 'consessions',
            key: 'id_concessions'
        }
    },
},
    {
        sequelize,
        tableName: "contacts",
        timestamps: false

});

Contacts.hasOne(Concessions, {foreignKey: "id_concessions"})
Concessions.belongsTo(Contacts, {foreignKey: "id_concessions"})