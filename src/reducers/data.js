import * as actionTypes from '../actions/actionTypes';

const initialState = {
    formAnswers: {
      selectedCheckbox: []
    },
    correctAnswers: []
};

export default fetchData = (state=initialState, action) => {
    if(action.type === actionTypes.FETCH_DATA){
        return {
            ...state,
            ...action.payload
        }
    }

    return state;
};
