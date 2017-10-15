import {
    getDecks,
    saveDeckTitle
} from '../db';

export const ADD_DECK = 'ADD_DECK';
export const GET_DECKS = 'GET_DECKS';

export const addDeck = (title) => dispatch => (
    saveDeckTitle(title)
        .then(() => dispatch({
            type: ADD_DECK,
            title
        }))
);

export const fetchDecks = () => dispatch => (
    getDecks()
        .then(decks => dispatch({
            type: GET_DECKS,
            decks
        }))
);
