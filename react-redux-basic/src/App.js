import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './component/Main';
import User from './component/User';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName('Anna')} />
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: 'SET_NAME',
                payload: name
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
