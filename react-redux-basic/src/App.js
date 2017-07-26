import React, { Component } from 'react';
import { Main } from './component/Main';
import { User } from './component/User';

class App extends Component {
    constructor() {
        super();
        this.state = {
            username: 'Max'
        };
    }

    changeUsername(newName) {
        this.setState({
            username: newName
        });
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={this.changeUsername.bind(this)} />
                <User username={this.state.username} />
            </div>
        );
    }
}

export default App;
