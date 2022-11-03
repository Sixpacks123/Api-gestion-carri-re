import { sequelize } from '../config/database'
import {Model, DataTypes} from 'sequelize'


export class Mines extends Model{
    declare id_mines: number;
    declare name: string;
    declare longitude: number;
    declare latitude: number;
    declare id_consessions: number;
}

Mines.init({
    id_mines:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:  false
    },
    longitude: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    latitude: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_consessions: {
        type: DataTypes.INTEGER,
        allowNull: false ,
        references: {
            model: 'consessions',
            key: 'id'
        }
    },
},
    {
        sequelize,
        tableName: "mines",
        timestamps: false

});


//ajouter la relatiosn a conssesion