// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

export default async (req, res) => {
	try {
		const players = await Player.findAll({
			include: "playerSkills",
		});
		console.log(`Fetching all players `, players);
		res.json(players);
	} catch (error) {
		console.log(error.stack);
	}
};
