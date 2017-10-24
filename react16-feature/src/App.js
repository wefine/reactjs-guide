import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

const Profile = ({ user }) => (<div>name: {user.name}</div>);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: { name: 'wefine' },
        };
    }

    onClick() {
        this.setState({ user: null });
    }

    render() {
        return (
            <div>
                <ErrorBoundary>
                    <Profile user={this.state.user} />
                </ErrorBoundary>
                <button onClick={this.onClick.bind(this)}>Update</button>
            </div>
        );
    }
}

export default App;
