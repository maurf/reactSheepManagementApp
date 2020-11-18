import * as actionTypes from '../actions/actionTypes';


const initialState = {
    sheeps: [], 
    sheepSaved: false,
    loading: true,
}

const fetchSheepsStart = (state, action) => {
    return {
        ...state,
        sheeps: [],
        loading: true
    }
} 

const fetchSheepsSuccess = (state, action) => {
    return {
        ...state,
        sheeps: action.sheeps,
        loading: false
    }
} 

const saveNewSheepSuccess = state => {
    return {
        ...state,
        sheepSaved: true
    }
}

const startNewSheep = state => {
    return {
        ...state, 
        sheepSaved: false
    }
}


const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SHEEPS_SUCCESS: return fetchSheepsSuccess( state, action );
        case actionTypes.FETCH_SHEEPS_START: return fetchSheepsStart(state);
        case actionTypes.START_NEW_SHEEP: return startNewSheep(state);
        case actionTypes.SAVE_NEW_SHEEP_SUCCESS: return saveNewSheepSuccess(state);
        default: return state;
    }
}

export default reducer;