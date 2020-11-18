import * as actionTypes from '../actions/actionTypes';


const initialState = {
    editSheepSaved: false,
    sheep: null
}

const saveEditSheepSuccess = state => {
    return {
        ...state,
        editSheepSaved: true
    }
    
}
const startEditSheep = state => {
    return {
        ...state, 
        editSheepSaved: false,
        sheep: null
    }
}

const fetchSheep = (state, action) => {
    return {
        ...state,
        sheep: action.sheep
    }
    
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_EDIT_SHEEP: return startEditSheep(state);
        case actionTypes.FETCH_SHEEP: return fetchSheep(state, action);
        case actionTypes.EDIT_SHEEP_SUCCESS: return saveEditSheepSuccess(state);
        default: return state;
    }
}

export default reducer;