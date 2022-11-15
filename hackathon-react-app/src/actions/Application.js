/* eslint-disable consistent-return */
import { initialPetitionState, pendingPetitionState, readyPetitionState } from '../Store';

const _getHackathons = () => (dispatch) => {

  dispatch({
		...pendingPetitionState,
		type: 'HACKATHONS',
		data: {}
	});

  async function getHackathons() {
    try {
      const response = await fetch('https://127.0.0.1:8000/api/hackathons', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  getHackathons().then((data) => {
      console.log(data)
      dispatch({
        ...readyPetitionState,
        type: 'HACKATHONS',
        data: {
          hackathons: data.results[0]
        }
      });
    })
    .catch((error) => {
      dispatch({
        ...initialPetitionState,
        type: "HACKATHONS",
        data: {},
      });
      /* podesmos hacer dispatch de otra acción en el caso de error */
      console.error('Error getting hackathons: ', error);
    });
  
};

const _getTopDevelopers = () => (dispatch) => {

	dispatch({
		...pendingPetitionState,
		type: 'TOPDEVELOPERS',
		data: {}
	});

  async function getTopDevelopers() {
    try {
      const response = await fetch('https://127.0.0.1:8000/api/topdevelopers', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  getTopDevelopers().then((data) => {
      console.log(data)
      dispatch({
        ...readyPetitionState,
        type: 'TOPDEVELOPERS',
        data: {
          hackathons: data.results[0]
        }
      });
    })
    .catch((error) => {
      dispatch({
        ...initialPetitionState,
        type: "TOPDEVELOPERS",
        data: {},
      });
      /* podesmos hacer dispatch de otra acción en el caso de error */
      console.error('Error getting hackathons: ', error);
    });
  
};

const _getDevelopments = (hackathon_id) => (dispatch) => {

	dispatch({
		...pendingPetitionState,
		type: 'DEVELOPMENTS',
		data: {}
	});

  async function getDevelopments() {
    try {
      const response = await fetch(`https://127.0.0.1:8000/api/developers/${hackathon_id}`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  getDevelopments().then((data) => {
      console.log(data)
      dispatch({
        ...readyPetitionState,
        type: 'DEVELOPMENTS',
        data: {
          hackathons: data.results[0]
        }
      });
    })
    .catch((error) => {
      dispatch({
        ...initialPetitionState,
        type: "DEVELOPMENTS",
        data: {},
      });
      console.error('Error getting developments: ', error);
    });
  
};
export {
	_getHackathons,
  _getTopDevelopers,
  _getDevelopments
};
