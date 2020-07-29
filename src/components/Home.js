import React from 'react';
import { connect } from 'react-redux';
import PollsList from './PollsList';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar';

class Home extends React.Component {

    ref = React.createRef();
    state = {
        ans: 0,
    }

    getAnsweredQuestions = () => {
        const users = this.props.users;
        const questions = this.props.questions;
        const authedUser = this.props.authedUser;
        const arr = Object.keys(users[authedUser].answers);
        const filteredArr = Object.values(questions).filter(q => arr.includes(q.id)).sort((a, b) => {
            return b.timestamp - a.timestamp;
        });
        return filteredArr.map(q => q.id);
    }

    getUnansweredQuestions = (answeredQuestions) => {
        const questions = this.props.questions;
        const arr = Object.values(questions).sort((a, b) => {
            return b.timestamp - a.timestamp;
        });
        return arr.filter(q => !answeredQuestions.includes(q.id)).map(q => q.id);
    }

    toggleQuestions = num => this.setState(() => ({ ans: num }));

    render() {
        if (this.props.authedUser === null)
            return <Redirect to={{
                pathname: '/signin',
                state: { from: this.props.history.location }
            }} />;
        const answeredQuestions = this.getAnsweredQuestions();
        const unAnsweredQuestions = this.getUnansweredQuestions(answeredQuestions);
        const questions = this.state.ans === 0 ? unAnsweredQuestions : answeredQuestions;
        return (
            <React.Fragment>
                <NavBar />
                <main>
                    <div className="btns">
                        <button type="button" onClick={() => { this.toggleQuestions(1) }}>Answered Questions</button>
                        <button type="button" onClick={() => { this.toggleQuestions(0) }}>Unanswered Questions</button>
                    </div>
                    <PollsList questions={questions} ref={this.ref} />
                </main>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Home);

