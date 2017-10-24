import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false };
    }

    componentDidCatch(err, info) {
        console.log(err, info);
        this.setState({ hasError: true });
        // sendErrorReport(err, info);
    }

    render() {
        if (this.state.hasError) {
            return <div>Oops, something went wrong!</div>;
        }

        return this.props.children;
    }
}