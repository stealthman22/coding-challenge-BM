// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
import Player from "../../db/model/player";
export default async (req, res) => {
	const token =
		"Bearer SkFabTZibXE1aE14ckpQUUxHc2dnQ2RzdlFRTTM2NFE2cGI4d3RQNjZmdEFITmdBQkE=";
	const requestedToken = req.header("Authorization");
	const requestedId = req.params.id;
	try {
		let player;
		// finding the player by primary key seems to work better than findOne
		if (requestedToken == token) {
			player = await Player.findByPk(requestedId, {
				include: "playerSkills",
			});
			await player.destroy({
				include: "playerSkills",
			});
		} else {
			console.log(requestedToken);
			console.log(`Token is wrong`);
		}
		console.log(`Player succesfully deleted`);
		res.json(player);
		// was receiving token as undefined,
		// used this to ensure it was showing up
		// const token = req.header("Authorization");
		// console.log(token);
		// res.json(`This is the token ${token}`);
	} catch (error) {
		console.log(error);
	}
};

// in sql, after deletion, rows are not cleared even tho they are empty (I think some option has to be used, maybe something called truncate)
