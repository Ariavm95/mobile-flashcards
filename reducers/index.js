import {
    ADD_DECK,
    GET_DECKS,
    ADD_CARD
} from '../actions';
import { initData } from '../db';

function decks(state = initData, action) {
    switch (action.type) {
        case GET_DECKS: {
            return action.decks;
        }
        case ADD_DECK: {
            const { title } = action;
            return {
                ...state,
                [title]: {
                    title,
                    questions: []
                }
            };
        }
        case ADD_CARD: {
            const stateCopy = {...state};
            stateCopy[action.title].questions.push(action.card);
            return stateCopy;
        }
        default:
            return state
    }
}

export default decks;
