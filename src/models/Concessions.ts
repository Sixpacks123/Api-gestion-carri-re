import { sequelize } from '../config/database'
import {Model, DataTypes} from 'sequelize'
import {Adresses} from "./Adresses";


export class Concessions extends Model{
    declare id_concessions: number;
    declare name: string;
    declare siret: number;
    declare license: string;
    declare phone : number;
    declare id_address: number;
}

Concessions.init({
    id_concessions: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    siret: {
        type: DataTypes.NUMBER,
        allowNull:  false,

    },
    license: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    phone: {
        type : DataTypes.NUMBER,
        allowNull:true,
    },
    id_adresses: {
        type: DataTypes.INTEGER,
        allowNull: false ,
        references: {
            model: 'adresses',
            key: 'id_adresses'
        }
    },
},
    {
        sequelize,
        tableName: "concessions",
        timestamps: false

});
Concessions.hasOne(Adresses,{ foreignKey: "id_adresses"})