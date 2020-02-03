import React from 'react';
import ReadableTimeUtil from "../../util/ReadableTimeUtil";

import {QuestionsCollection} from "../../api/questions";
import '/imports/scss/QueueItem.scss';

const QueueItem = ({user, question, idx}) => {
    const resolveQuestion = () => {
        QuestionsCollection.update({_id: question._id}, {
            resolved: true
        })
    };
    return (
        <div className="queue-item">
            <div>
                {idx + 1}
            </div>
            <div>
                {user.profile.name ? user.profile.name : user.services.github.username}
            </div>
            <div>
                {ReadableTimeUtil(question.created)}
            </div>
            <div>
                <label>
                    <button onClick={resolveQuestion}>Resolve</button>
                </label>
            </div>
        </div>
    );
};

export default QueueItem;