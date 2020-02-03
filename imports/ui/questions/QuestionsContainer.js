import {connect} from 'react-redux';
import Questions from './Questions'
import { withTracker } from 'meteor/react-meteor-data';

import {fetchQuestions} from "../../actions/QuestionActions";

const mapStateToProps = ({entities, session}) => {
    return {
        questions: entities.questions,
        currentUser: entities.users[session.userId],
        users: entities.users
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => dispatch(fetchQuestions())
});

const QuestionsContainer = connect(mapStateToProps, mapDispatchToProps)(Questions);

export default QuestionsContainer;
