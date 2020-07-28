import React from 'react';
import { connect } from 'react-redux';
import PollsList from './PollsList';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {

    ref = React.createRef();
    state = {
        ans: 0,
    }

    getAnsweredQuestions = () => {
        const users = this.props.users;
        const authedUser = this.props.authedUser;
        return Object.keys(users[authedUser].answers);
    }

    getUnansweredQuestions = (answeredQuestions) => {
        const questions = this.props.questions;
        return Object.keys(questions).filter((id) => !answeredQuestions.includes(id));
    }

    toggleQuestions = num => this.setState(() => ({ ans: num }));

    render() {
        if (this.props.authedUser == null)
            return <Redirect to="/signin" />;
        const answeredQuestions = this.getAnsweredQuestions();
        const unAnsweredQuestions = this.getUnansweredQuestions(answeredQuestions);
        const questions = this.state.ans === 0 ? unAnsweredQuestions : answeredQuestions;
        return (
            <main>
                <div className="btns">
                    <button type="button" onClick={() => { this.toggleQuestions(1) }}>Answered Questions</button>
                    <button type="button" onClick={() => { this.toggleQuestions(0) }}>Unanswered Questions</button>
                </div>
                <PollsList questions={questions} ref={this.ref} />
            </main>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Home);