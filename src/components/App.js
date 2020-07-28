import React from 'react';
import NavBar from './NavBar';
import { Route } from 'react-router-dom';
import SignInForm from './SignInForm';


class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Route exact path="/" component={null} />
                <Route path="/signin" component={SignInForm} />
            </React.Fragment>
        );
    }
}

export default App;
