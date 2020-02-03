import {QuestionsCollection} from "../api/questions";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

const receiveQuestions = (payload) => ({
    type: RECEIVE_QUESTIONS,
    payload
});

export const fetchQuestions = () => dispatch => {
    Tracker.autorun(() => {
        const questions = QuestionsCollection.find({resolved: false}, {sort: {date_created: -1}}).fetch();
        const questionUserIds = questions.map(q => q.userId);
        dispatch(receiveQuestions({questions, users: Meteor.users.find({_id: {$in: questionUserIds}}).fetch()}))
    })
}