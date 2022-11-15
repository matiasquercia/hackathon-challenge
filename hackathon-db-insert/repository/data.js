const axios = require("axios");
require('dotenv').config();

const getData = async () => {

	try {
    let resp = await axios.get("https://randomuser.me/api/", {});
    let responseData = resp.data.results;
    return(responseData);
	}
	catch (err) {
		// Handle Error Here
		return(err);
	}
};


module.exports = {
  getData
};

