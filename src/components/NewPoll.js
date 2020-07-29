import React from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from '../actions/shared'
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


class NewPoll extends React.Component {

    refOne = React.createRef();
    refTwo = React.createRef();

    eventListener = () => {
        const optionOneText = this.refOne.current.value.trim();
        const optionTwoText = this.refTwo.current.value.trim();
        const author = this.props.authedUser;
        this.props.dispatch(saveQuestion({
            optionOneText,
            optionTwoText,
            author,
        }));
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="new-poll">
                    <p>Create New Question</p>
                    <p>Would you rather...</p>
                    <form>
                        <input type="text" id="c1" name="c1" placeholder="Enter Option One Text Here" ref={this.refOne} />
                        <fieldset>
                            <legend>OR</legend>
                        </fieldset>
                        <input type="text" id="c2" name="c2" placeholder="Enter Option Two Text Here" ref={this.refTwo} />
                        <button type="button" onClick={this.eventListener}><Link to="/">Submit</Link></button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(NewPoll);