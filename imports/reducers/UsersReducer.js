import {RECEIVE_USER, RECEIVE_CURRENT_USER} from '../actions/UserActions'
import {RECEIVE_QUESTIONS} from '../actions/QuestionActions';
const UsersReducer = (prevState = {}, action) => {
    Object.assign(prevState);

    switch(action.type){
        case RECEIVE_USER:
            if (!action.user) return {};
            return Object.assign({}, prevState, {[action.user._id]: action.user});
        case RECEIVE_QUESTIONS:
            if (!action.payload) return {};
            let nextState = {};
            action.payload.users.forEach(u => nextState[u._id] = u);
            return Object.assign({}, prevState, nextState);
        case RECEIVE_CURRENT_USER:
            if (!action.user) return {};
            return Object.assign({}, prevState, {[action.user._id]: action.user});
        default:
            return prevState;
    }
}

export default UsersReducer