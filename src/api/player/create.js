import Player from "../../db/model/player";
import PlayerSkill from "../../db/model/playerSkill";

export default async (req, res) => {
	try {
		const { name, position, skill, value } = req.body;
		const player = await Player.create(
			{
				name,
				position,
				playerSkills: [
					{
						skill,
						value,
					},
				],
			},
			{ include: PlayerSkill }
		);

		console.log(`Player created and saved`);
		res.json(player);
	} catch (error) {
		res.send(`This is the ${error.message}, and ${error.stack}`);
	}
};
// { include: PlayerSkill }
