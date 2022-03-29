import { DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define("users", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
	},
	email: {
		type: DataTypes.STRING,
	},
});

export default User;
