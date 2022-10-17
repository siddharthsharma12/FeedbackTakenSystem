import { Sequelize } from "sequelize";

const db = new Sequelize('feedback_taken', 'root', '', {

    host: 'localhost',
    dialect: 'mysql'
});

export default db;