// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
const { check, oneof, validationResult } = require("express-validator");

import Player from "../../db/model/player";

// export default async (req, res) => {
// 	const requestedId = req.params.id;
// 	try {
// 		const { name, position, playerSkills } = req.body;
// 		const player = await Player.update(
// 			{
// 				name,
// 				position,
// 				playerSkills,
// 			},
// 			{
// 				where: { id: requestedId },
// 				include: "playerSkills",
// 			}
// 		);
// 		res.json(player);
// 	} catch (error) {
// 		console.log(` This is the error ${error}`);
// 	}
// };

// export default (oneof([1]), async (req, res) => {});

export default async (req, res) => {
	const { name, postition, playerSkills } = req.body;
	const requestedId = req.params.id;

	const player = await Player.findByPk(requestedId, {
		include: "playerSkills",
	});
	try {
		if (player) {
			await player.update({
				name,
				postition,
				playerSkills,
			});
			await player.save();
		} else {
			console.log(`Player not found: ${requestedId}`);
		}
		res.json(player);
	} catch (error) {
		console.log(`This is the ${error.message}`);
		res.json(error.message);
	}
};
