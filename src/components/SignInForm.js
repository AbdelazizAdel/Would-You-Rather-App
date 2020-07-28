import React from 'react';
import { getInitialData } from '../actions/shared';
import { connect } from 'react-redux';

class SignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    handleSignIn = () => {
        const dispatch = this.props.dispatch;
        const userName = this.ref.current.value;
        const id = userName.replace(' ', '').toLowerCase();
        dispatch(getInitialData(id));
    }

    render() {
        return (
            <div className="sign-in">
                <div className="header">
                    <p>Welcome to the Would You Rather App!</p>
                    <span>please sign in to continue</span>
                </div>
                <select ref={this.ref}>
                    <option>John Doe</option>
                    <option>Sarah Edo</option>
                    <option>Tyler McGinnis</option>
                </select>
                <button type="button" onClick={this.handleSignIn}>Sign in</button>
            </div>
        );
    }
}

export default connect()(SignInForm);