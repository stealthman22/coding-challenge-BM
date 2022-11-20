// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

export default async (req, res) => {
	const { name, position, playerSkills } = req.body;
	try {
		const player = await Player.create(
			{
				name,
				position,
				playerSkills,
			},
			{
				include: "playerSkills",
			}
		);
		console.log(`Player created and saved!`);
		res.json(player);
	} catch (error) {
		console.log(error.stack);
	}
};
// { include: PlayerSkill }
