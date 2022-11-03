import { sequelize } from '../config/database'
import {Model, DataTypes} from 'sequelize'
import {Addresses} from "./Addresses";


export class Consessions extends Model{
    declare id_consessions: number;
    declare name: string;
    declare siret: number;
    declare license: string;
    declare phone : number;
    declare id_address: number;
}

Consessions.init({
    id_consessions: {
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
    latitude: {
        type : DataTypes.NUMBER,
        allowNull:true,
    },
    longitude:{
        type : DataTypes.NUMBER,
        allowNull:true,
    },
    id_address: {
        type: DataTypes.INTEGER,
        allowNull: false ,
        references: {
            model: 'addresses',
            key: 'id_addresses'
        }
    },
},
    {
        sequelize,
        tableName: "consessions",
        timestamps: false

});

Addresses.hasOne(Consessions,{ foreignKey: "id_address"})