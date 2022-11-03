import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('carrieres', 'root' ,'', {
    host : 'localhost',
    dialect:'mysql'
} )