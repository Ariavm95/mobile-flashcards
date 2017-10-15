import { AsyncStorage } from 'react-native';

const STORAGE_KEY = "FLASHBARDS_KEY";
const initData = {
    React: {
        title: 'React',
        questions: [{
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [{
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }]
    }
}

export const getDecks = () => {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then( results => {
            if(results == null) {
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initData));
                return initData;
            } else {
                return JSON.parse(results);
            }
        }).then(data => {
            return Object.keys(data).reduce((decks, id) => {
                return decks.concat(data[id]);
            }, []);
        });
}

export const getDeck = (id) => {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(results => {
            const data = JSON.parse(results);
            return data[id];
        })
}

export const saveDeckTitle = (title) => {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }))
}

export const addCardToDeck = (title, card) => {
    const {question, answer} = card;
    data[title].questions.push({
        question,
        answer
    })
}
