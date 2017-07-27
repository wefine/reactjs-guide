import React, { Component } from 'react';
import { Main } from './component/Main';
import { User } from './component/User';
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
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
