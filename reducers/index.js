import { ADD_DECK } from '../actions';
import { initData } from '../db';

function decks(state = initData, action) {
    switch (action.type) {
        case ADD_DECK:
            const { title } = action;
            return {
                ...state,
                [title]: {
                    title,
                    questions: []
                }
            }
        default:
            return state
    }
}

export default decks;
