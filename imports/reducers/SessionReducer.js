import {RECEIVE_CURRENT_USER} from '../actions/UserActions'

export default (prevState = {}, action) => {
    Object.freeze(prevState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            if (!action.user) return {
                isAuthenticated: false,
                userId: null
            };
            return {
                isAuthenticated: true,
                userId: action.user._id
            }
        default:
            return prevState;

    }
}