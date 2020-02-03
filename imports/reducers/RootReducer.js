import {combineReducers} from "redux";
import entities from './EntitiesReducer'
import session from './SessionReducer'
const RootReducer = combineReducers({
    entities,
    session
});

export default RootReducer