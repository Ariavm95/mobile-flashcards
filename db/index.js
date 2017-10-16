import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const STORAGE_KEY = "FLASHCARDS:STORAGE_KEY";
const NOTIFICATION_KEY = "FLASHCARDS:NOTIFICATION_KEY";

export const initData = {
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
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(results => {
            return JSON.parse(results)[title]
        })
        .then(data => {
            const {question, answer} = card;
            const questions = data.questions.concat({
                question,
                answer
            });
            AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
                [title]: {
                    title,
                    questions
                }
            }));
        })
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(20);
                            tomorrow.setMinutes(0);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(), {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    })
            }
        })
}

function createNotification() {
    return {
        title: 'Take a Quiz',
        body: "Don't forget to take a quiz on your deck!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}
