import React from 'react';

class NotFound extends React.Component {

    render() {
        return (
            <div className="error">
                <span>404 Not Found</span>
                <br />
                <i className="fas fa-bomb"></i>
            </div>
        );
    }
}

export default NotFound;