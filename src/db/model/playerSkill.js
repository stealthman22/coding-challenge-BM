// ---------------------------------------------------------------------------------------------
// YOU CAN MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// YOU SHOULD NOT CHANGE THE EXPORTED VALUE OF THIS FILE
// ---------------------------------------------------------------------------------------------

import Sequelize from "sequelize";
import database from "../index";
import Player from "./player";

const PlayerSkill = database.define(
	"playerSkill",
	{
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		skill: {
			type: Sequelize.STRING(200),
		},
		value: {
			type: Sequelize.INTEGER,
		},
	},
	{
		timestamps: false,
	}
);

export default PlayerSkill;

// Trying to set the accepted values for the skill field
// validate: {
// 	checkValue(value) {
// 		if (
// 			!value === "defense" ||
// 			!value === "attack" ||
// 			!value === "speed" ||
// 			!value === "strength" ||
// 			!value === "stamina"
// 		) {
// 			throw new Error(`Invalid skill`);
// 		}
// 	},
// },

// makes the field required
// allowNull: false,

// isIn: {
// 	args: [['en', 'zh']],
// 	msg: "Must be English or Chinese"
// }
