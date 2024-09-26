import  {Sequelize} from "sequelize";
import db from "../config/database.js";
const DataTypes = Sequelize;

const users = db.define('users', {
     
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profileimage: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    }
},{freezeTableName: true});


export default users;
