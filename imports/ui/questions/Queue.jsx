import React from 'react';
import QueueItem from "./QueueItem";

import '/imports/scss/Queue.scss';

const Queue = ({questions, users}) => {
    return (
        <div className="queue-container">
            <div className='queue-title'>Current Queue:</div>
            <div className="queue-headers-container">
                <div className="queue-headers">
                    <div>#</div>
                    <div>Name</div>
                    <div>Time in Queue</div>
                    <div>Resolve</div>
                </div>
            </div>
            <div className="queue">
                {Object.keys(questions).map((key, idx) => {
                    return <QueueItem key={questions[key]._id} user={users[key]} question={questions[key]} idx={idx}/>
                })}
            </div>
        </div>
    );
};

export default Queue;