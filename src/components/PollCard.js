import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class PollCard extends React.Component {

    getQuestionText = qid => {
        const questions = this.props.questions;
        const text = questions[qid].optionOne.text;
        return text.length > 15 ? text.substr(0, 15) : text;

    }

    getAuthorInfo = qid => {
        const questions = this.props.questions;
        const users = this.props.users;
        return {
            name: users[questions[qid].author].name,
            img: users[questions[qid].author].avatarURL,
        }
    }



    render() {
        const qid = this.props.qid;
        return (
            <React.Fragment>
                <div className="author">
                    {`${this.getAuthorInfo(qid).name} asks:`}
                </div>
                <div className="avatar-container">
                    <div className="avatar" style={{ backgroundImage: `url(${this.getAuthorInfo(qid).img})` }}></div>
                </div>
                <div className="card-info">
                    <span>Would you rather</span>
                    <span>{`...${this.getQuestionText(qid)}...`}</span>
                    <button type="button"><Link to={`/questions/${qid}`}>view poll</Link></button>
                </div>
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

export default connect(mapStateToProps)(PollCard);