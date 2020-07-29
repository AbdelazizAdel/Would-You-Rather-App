import React from 'react';
import { getInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import NavBar from './NavBar';


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
        const to = this.props.location.state ? this.props.location.state.from.pathname : '/';
        setTimeout(() => { this.props.history.push(to) }, 1000);
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
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
            </React.Fragment>
        );
    }
}

export default connect()(SignInForm);