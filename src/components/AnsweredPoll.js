import React from 'react';
import { connect } from 'react-redux';

class AnsweredPoll extends React.Component {

    getQuestionInfo = qid => {
        const questions = this.props.questions;
        const text_1 = questions[qid].optionOne.text;
        const text_2 = questions[qid].optionTwo.text;
        const optionOneVotes = questions[qid].optionOne.votes.length;
        const optionTwoVotes = questions[qid].optionTwo.votes.length;;
        return {
            text_1,
            text_2,
            optionOne: optionOneVotes,
            optionTwo: optionTwoVotes,
        }
    }

    getAuthorInfo = qid => {
        const questions = this.props.questions;
        const users = this.props.users;
        return {
            name: users[questions[qid].author].name,
            img: users[questions[qid].author].avatarURL,
        }
    }

    getChoice = qid => {
        return this.props.users[this.props.authedUser]['answers'][qid];
    }

    render() {
        const qid = this.props.qid;
        const authorInfo = this.getAuthorInfo(qid);
        const questionInfo = this.getQuestionInfo(qid);
        const choice = this.getChoice(qid);
        const totalVotes = questionInfo['optionOne'] + questionInfo['optionTwo'];
        let progress = (questionInfo[choice] * 100 / (totalVotes));
        progress = Number.isInteger(progress) ? progress : progress.toFixed(2);
        const widthOne = choice === 'optionOne' ? progress : 100 - progress;
        const widthTwo = choice === 'optionTwo' ? progress : 100 - progress;
        return (
            <div className="a-poll">
                <div className="author">
                    {`Asked by ${authorInfo.name}`}
                </div>
                <div className="content">
                    <div className="avatar-container">
                        <div className="avatar" style={{ backgroundImage: `url(${authorInfo.img})` }}></div>
                    </div>
                    <div className="card-info">
                        <span>Results:</span>
                        <div className={choice === 'optionOne' ? 'chosen' : ''}>
                            <p>{`Would you rather ${questionInfo.text_1}?`}</p>
                            <div className="progress">
                                <div className="bar" style={{ width: `${widthOne}%` }}>{`${widthOne}%`}</div>
                            </div>
                            <span className="votes">{`${questionInfo['optionOne']} out of ${totalVotes}`}</span>
                            {choice === 'optionOne' && <i className="fas fa-check-circle"></i>}
                        </div>
                        <div className={choice === 'optionTwo' ? 'chosen' : ''}>
                            <p>{`Would you rather ${questionInfo.text_2}?`}</p>
                            <div className="progress">
                                <div className="bar" style={{ width: `${widthTwo}%` }}>{`${widthTwo}%`}</div>
                            </div>
                            <span className="votes">{`${questionInfo['optionTwo']} out of ${totalVotes}`}</span>
                            {choice === 'optionTwo' && <i className="fas fa-check-circle"></i>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...state,
        ...props,
    }
}

export default connect(mapStateToProps)(AnsweredPoll);