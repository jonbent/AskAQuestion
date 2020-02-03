import React, {Component} from 'react';
import Queue from "./Queue";
import NewQuestion from "./NewQuestion";
import '/imports/scss/Questions.scss'

class Questions extends Component {
    componentDidMount() {
        this.props.fetchQuestions()
    }

    render() {
        const {questions, currentUser, users} = this.props;
        if (!currentUser) return null;
        return (
            <div className="questions">
                <NewQuestion user={currentUser} question={questions[currentUser._id]}/>
                <Queue questions={questions} users={users}/>
            </div>
        );
    }
}

export default Questions;