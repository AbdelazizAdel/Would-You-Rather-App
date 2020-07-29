import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetUser } from '../actions/authedUser'

class NavBar extends React.Component {

    getUserName = (id) => {
        return this.props.users[id].name;
    }

    render() {
        const user = this.props.authedUser;
        return (
            <React.Fragment>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/add">New Question</Link>
                    <Link to="/leaderboard">Leader Board</Link>
                    <div className="right">
                        {user != null && <span>{`Hello, ${this.getUserName(user)}`}</span>}
                        <Link to="/" onClick={() => { this.props.dispatch(resetUser()) }}>Logout</Link>
                    </div>
                </nav>
                <div className="border"></div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        authedUser: state.authedUser,
    }
}

export default connect(mapStateToProps)(NavBar);