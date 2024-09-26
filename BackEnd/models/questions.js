import { Sequelize } from "sequelize";
import db from "../config/database.js";
const DataTypes = Sequelize;

const fb_questions = db.define('fb_questions', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
   },
    question: {
        type: DataTypes.STRING,
        allowNull: true
    },
    questionType: {
        type: DataTypes.STRING,
        allowNull: true
    },
    option_value: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    freezeTableName:  true
})

export default fb_questions;