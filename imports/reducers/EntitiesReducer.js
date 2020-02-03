import {combineReducers} from "redux";
import users from './UsersReducer';
import questions from './QuestionsReducer';

const EntitiesReducer = combineReducers({
    users,
    questions
});

export default EntitiesReducer;