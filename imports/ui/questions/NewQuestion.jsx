import React from 'react';
import {createQuestion} from '/imports/util/QuestionsUtil'



import '/imports/scss/NewQuestion.scss'

const NewQuestion = ({user, question}) => {
    const addQuestion = (e) => {
        if (!question){
            createQuestion(user._id);
            Meteor.call('sendTextForQuestion', user.profile.name ? user.profile.name : user.services.github.username)
        } else {
            alert('You already have a question in!');
        }
    }
    return (
        <div className="new-question" onClick={addQuestion}>
            <div>Add A Question</div>
        </div>
    );
};

export default NewQuestion;