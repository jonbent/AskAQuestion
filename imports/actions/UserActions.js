import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});
const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const loadCurrentUser = () => dispatch => {
        Tracker.autorun(() => {
            dispatch(receiveCurrentUser(Meteor.user()))
        })
    }