import React from 'react';
import { connect } from 'react-redux';
import { saveAnswer } from '../actions/shared'
import { Link } from 'react-router-dom';

class UnAnsweredPoll extends React.Component {

    optionOneRef = React.createRef();
    optionTwoRef = React.createRef();

    getQuestionText = qid => {
        const questions = this.props.questions;
        const text_1 = questions[qid].optionOne.text;
        const text_2 = questions[qid].optionTwo.text;
        return {
            text_1,
            text_2,
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

    saveAnswer = () => {
        const uid = this.props.authedUser;
        const qid = this.props.qid;
        if (this.optionOneRef.current.checked)
            this.props.dispatch(saveAnswer(uid, qid, 'optionOne'));
        else if (this.optionTwoRef.current.checked)
            this.props.dispatch(saveAnswer(uid, qid, 'optionTwo'));
    }

    render() {
        const qid = this.props.qid;
        const authorInfo = this.getAuthorInfo(qid);
        const questionText = this.getQuestionText(qid);
        return (
            <div className="u-poll" >
                <div className="author">
                    {`${authorInfo.name} asks:`}
                </div>
                <div className="content">
                    <div className="avatar-container">
                        <div className="avatar" style={{ backgroundImage: `url(${authorInfo.img})` }}></div>
                    </div>
                    <div className="card-info">
                        <span>Would you rather...</span>
                        <input type="radio" name="option" id="o1" value={`${questionText.text_1}`} ref={this.optionOneRef} defaultChecked />
                        <label htmlFor="o1">{`${questionText.text_1}`}</label>
                        <br />
                        <input type="radio" name="option" id="o2" value={`${questionText.text_2}`} ref={this.optionTwoRef} />
                        <label htmlFor="o2">{`${questionText.text_2}`}</label>
                        <br />
                        <button type="button" onClick={this.saveAnswer}><Link to="/">submit</Link></button>
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
    };
}

export default connect(mapStateToProps)(UnAnsweredPoll);