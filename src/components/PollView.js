import React from 'react';
import UnAnsweredPoll from './UnAnsweredPoll';
import AnsweredPoll from './AnsweredPoll';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { Redirect } from 'react-router-dom';
import NotFound from './NotFound';



class PollView extends React.Component {

    isAnsweredQuestion(qid) {
        return this.props.users[this.props.authedUser]['answers'][qid] !== undefined;

    }

    questionExists(qid) {
        return this.props.questions[qid] !== undefined;
    }

    render() {
        if (this.props.authedUser === null)
            return <Redirect to={{
                pathname: '/signin',
                state: { from: this.props.history.location }
            }} />;

        const qid = this.props.match.params.id;
        if (!this.questionExists(qid))
            return <NotFound />
        if (this.isAnsweredQuestion(qid))
            return (
                <React.Fragment>
                    <NavBar />
                    <AnsweredPoll qid={qid} />
                </React.Fragment>
            );
        return (
            <React.Fragment>
                <NavBar />
                <UnAnsweredPoll qid={qid} />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...state,
        ...props,
    }
}

export default connect(mapStateToProps)(PollView);