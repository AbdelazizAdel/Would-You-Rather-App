import React from 'react';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import NavBar from './NavBar';


class UsersList extends React.Component {

    render() {

        return (
            <React.Fragment>
                <NavBar />
                <div className="main">
                    <ul className="user-cards-list">
                        {
                            Object.keys(this.props.users).map(id => <li key={id} className="user-card"><UserCard uid={id} /></li>)
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps)(UsersList);