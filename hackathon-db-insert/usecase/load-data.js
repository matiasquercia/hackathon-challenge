const { getData } = require("../repository/data");

const loadData = async () => {
  let resultHackathons = [];
  let resultDevelopers = [];

  const dataHackathon = await getData();

  // parse hackathon data
  resultHackathons.push({
    id: dataHackathon[0].id.value,
    name: dataHackathon[0].location.street.name,
    location: dataHackathon[0].location.country,
  });      

	// parse developers data
	for (let index = 1; index <= 10; index++) {

    const dataDevelopers = await getData();

    resultDevelopers.push({
      id: dataDevelopers[0].login.uuid,
      id_hackathon: dataHackathon[0].id.value,
      ranking: index,
      firstName: dataDevelopers[0].name.first,
      lastName: dataDevelopers[0].name.last,
      age: dataDevelopers[0].dob.age,
      phone: dataDevelopers[0].phone,
      picture: dataDevelopers[0].picture.thumbnail,
      city: dataDevelopers[0].location.city,
      email: dataDevelopers[0].email
    }) 

  }

  return {hackathons: resultHackathons, developers: resultDevelopers};
}

module.exports = {
  loadData
};
