import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export const pendingPetitionState = { ready: false, pending: true, lastCallTimestamp: null };
export const readyPetitionState = { ready: true, pending: false, lastCallTimestamp: Date.now() };
export const initialPetitionState = { ready: false, pending: false, lastCallTimestamp: null };

const initialState = {
    hackathons: { ...initialPetitionState, data: [] },
    developments: { ...initialPetitionState, data: [] },
    topDevelopers: { ...initialPetitionState, data: [] },
};

const reducer = (state, action) => {
    const currentState = state || initialState;
    const actions = {
        HACKATHONS({_action}) { return { hackathons: { ready: _action.ready, pending: _action.pending, data: _action.data } };} ,
        DEVELOPMENTS({_action}) { return { developments: { ready: _action.ready, pending: _action.pending, data: _action.data } };} ,
        TOPDEVELOPERS({_action}) { return { topDevelopers: { ready: _action.ready, pending: _action.pending, data: _action.data } };} ,
    };

    return { ...currentState, ...(actions[action.type] ? actions[action.type]({_action: action, _currentState: currentState}) : {})};
};

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;