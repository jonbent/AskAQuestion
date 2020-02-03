import {RECEIVE_QUESTIONS} from '../actions/QuestionActions'

const QuestionsReducer = (prevState = {}, action) => {
    Object.freeze(prevState);
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            let nextState = {};
            action.questions.forEach(q => nextState[q.userId] = q);
            return nextState
        default:
            return prevState;
    }
}

export default QuestionsReducer;