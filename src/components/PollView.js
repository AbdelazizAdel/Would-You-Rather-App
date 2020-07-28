import React from 'react';
import UnansweredPoll from './UnAnsweredPoll';
import AnsweredPoll from './AnsweredPoll';
import { connect } from 'react-redux';

class PollView extends React.Component {

    isAnsweredQuestion(qid) {
        return this.props.users[this.props.authedUser]['answers'][qid] !== undefined;

    }

    render() {
        const qid = this.props.match.params.id;
        if (this.isAnsweredQuestion(qid))
            return <AnsweredPoll qid={qid} />;
        return <UnansweredPoll qid={qid} />
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