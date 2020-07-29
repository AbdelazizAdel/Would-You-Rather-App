import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignInForm from './SignInForm';
import Home from './Home';
import PollView from './PollView';
import NewPoll from './NewPoll';
import UsersList from './UsersList';
import NotFound from './NotFound';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignInForm} />
                <Route exact path="/questions/:id" component={PollView} />
                <Route exact path="/add" component={NewPoll} />
                <Route exact path="/leaderboard" component={UsersList} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default App;
