const sequelize = require("./db/connection");

const Hackathon = require("./models/hackathon");
const Developer = require("./models/developer");
const { loadData } = require("./usecase/load-data");

const requestAndInsertData = () => {
	const handler = async () =>{

		const data = await loadData();
		await Hackathon.bulkCreate(data.hackathons);
		await Developer.bulkCreate(data.developers);
	}

	sequelize.sync().then( () => handler() )
}

exports.handler = requestAndInsertData;



