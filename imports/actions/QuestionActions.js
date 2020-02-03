import {QuestionsCollection} from "../api/questions";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions
});

export const fetchQuestions = () => dispatch => {
    Tracker.autorun(() => {
        dispatch(receiveQuestions(QuestionsCollection.find({resolved: false}, {sort: {date_created: -1}}).fetch()))
    })
}