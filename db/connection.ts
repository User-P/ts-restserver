import { Sequelize } from 'sequelize'

const db = new Sequelize('node', 'user-p', 'pruebitas2022', {
    host: 'localhost',
    dialect: 'mysql',

})

export default db;