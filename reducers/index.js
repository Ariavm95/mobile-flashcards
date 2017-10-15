import {
    ADD_DECK,
    GET_DECKS
} from '../actions';
import { initData } from '../db';

function decks(state = initData, action) {
    switch (action.type) {
        case GET_DECKS:
            return action.decks;
        case ADD_DECK:
            const { title } = action;
            return {
                ...state,
                [title]: {
                    title,
                    questions: []
                }
            };
        default:
            return state
    }
}

export default decks;
