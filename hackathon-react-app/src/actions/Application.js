/* eslint-disable consistent-return */
import { initialPetitionState, pendingPetitionState, readyPetitionState } from '../Store';
import axios from 'axios';
    
export const _getHackathons = () => async dispatch => {

  dispatch({
		...pendingPetitionState,
		type: 'HACKATHONS',
		data: []
	});
    
  try{
      const res = await axios.get(`http://127.0.0.1:8001/api/hackathons`)
      dispatch( {
        ...readyPetitionState,
        type: 'HACKATHONS',
        data: res.data.data
      })
  }
  catch(e){
    dispatch({
      ...initialPetitionState,
      type: "HACKATHONS",
      data: [],
    });
    console.error('Error getting hackathons: ', e);
  }

}

export const _getTopDevelopers = () => async dispatch => {

  dispatch({
		...pendingPetitionState,
		type: 'TOPDEVELOPERS',
		data: []
	});
  try{
      const res = axios.get(`http://127.0.0.1:8001/api/topdevelopers`)
      res.then((response) => 
        dispatch( {
          ...readyPetitionState,
          type: 'TOPDEVELOPERS',
          data: response.data
        })
      )
  }
  catch(e){
    dispatch({
      ...initialPetitionState,
      type: "TOPDEVELOPERS",
      data: [],
    });
    console.error('Error getting developers: ', e);
  }

}

export const _getDevelopments = (hackathon_id) => async dispatch => {

  dispatch({
		...pendingPetitionState,
		type: 'DEVELOPMENTS',
		data: []
	});
    
  try{
      const res = axios.get(`http://127.0.0.1:8001/api/developers/${hackathon_id}`)
      res.then((response) => 
        dispatch( {
          ...readyPetitionState,
          type: 'DEVELOPMENTS',
          data: response.data
        })
      )
  }
  catch(e){
    dispatch({
      ...initialPetitionState,
      type: "DEVELOPMENTS",
      data: [],
    });
    console.error('Error getting developments: ', e);
  }

}
