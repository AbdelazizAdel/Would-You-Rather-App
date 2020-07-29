import React from 'react';
import UnAnsweredPoll from './UnAnsweredPoll';
import AnsweredPoll from './AnsweredPoll';
import { connect } from 'react-redux';
import NavBar from './NavBar';


class PollView extends React.Component {

    isAnsweredQuestion(qid) {
        return this.props.users[this.props.authedUser]['answers'][qid] !== undefined;

    }

    render() {
        const qid = this.props.match.params.id;
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
        authedUser: state.authedUser,
        users: state.users,
        ...props,
    }
}

export default connect(mapStateToProps)(PollView);