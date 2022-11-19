// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
import Player from "../../db/model/player";

export default async (req, res) => {
	try {
		// this route updates a player's information
		const requestedId = req.params.id;
		const player = await Player.update(
			{ playerName: req.body.playerName, position: req.body.position },
			{ where: { id: requestedId } }
		);
		console.log(`Player updated`);
		res.json({
			data: player,
		});
	} catch (error) {
		console.log(error);
	}
};
