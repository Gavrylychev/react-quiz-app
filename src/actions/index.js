import * as actionTypes from './actionTypes';
// import QuestionsData from '../questions-data/QuestionsData';

export const fetchData = (data) => {
    return {
        type: actionTypes.FETCH_DATA,
        payload: data
    };
};