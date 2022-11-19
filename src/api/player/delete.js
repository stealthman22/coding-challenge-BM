// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------
import Player from "../../db/model/player";
export default async (req, res) => {
	try {
		const requestedId = req.params.id;
		const player = await Player.destroy({
			where: {
				id: requestedId,
			},
		});
	} catch (error) {
		console.log(`This is the ${error}`);
	}
};
