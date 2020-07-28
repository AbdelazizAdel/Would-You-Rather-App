import React from 'react';
import NavBar from './NavBar';
import { Route } from 'react-router-dom';
import SignInForm from './SignInForm';
import Home from './Home';
import PollView from './PollView';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route path="/signin" component={SignInForm} />
                <Route path="/polls/:id" component={PollView} />
            </React.Fragment>
        );
    }
}

export default App;
