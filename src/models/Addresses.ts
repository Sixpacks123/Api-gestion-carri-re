import { sequelize } from '../config/database'
import {Model, DataTypes} from 'sequelize'


export class Addresses extends Model{
    declare id_addresses: number;
    declare street: string;
    declare complement: string;
    declare zipcode: string;
    declare town : string;
}

Addresses.init({
    id_addresses: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complement: {
        type: DataTypes.STRING,
        allowNull:  false,

    },
    zipcode: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    town: {
        type : DataTypes.NUMBER,
        allowNull:true,
    }
},{
    sequelize,
    tableName: "addresses",
    timestamps: false
});

