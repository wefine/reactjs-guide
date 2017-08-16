import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

import 'xterm/dist/addons/fit/fit.js';
import 'xterm/dist/addons/fullscreen/fullscreen.js';
import Xterm from 'xterm/dist/xterm.js';
import 'xterm/dist/xterm.css';
import './Terminal.css'

function utf8_to_b64(str) {
    return window.btoa(window.unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(window.escape(window.atob(str)));
}

export default class Terminal extends React.Component {
    static propTypes = {
        socketURL: PropTypes.string.isRequired,
        onError: PropTypes.func,
        onClose: PropTypes.func,
        title: PropTypes.string,
        initialEmit: PropTypes.array,
        fullscreen: PropTypes.bool
    };

    constructor(props) {
        console.log('Terminal constructor');
        super(props);
        this.term = new Xterm({ cursorBlink: true, cols: 80, rows: 24 });
        this.socket = this.createSocket(props.socketURL);
        this.handleResize = this.handleResize.bind(this);
        this.width = props.width;
        this.height = props.height;
        this.isChange = false;
    }

    createSocket(path) {
        debugger;
        const { onError, onClose, initialEmit, title } = this.props;
        const term = this.term;
        const ws = new window.WebSocket(path, 'base64.channel.k8s.io');
        this.isChange = false;

        ws.onopen = () => {
            console.log('socket open...');
            ws.send('0');
            term.write(title);
        };

        ws.onerror = (err) => {
            console.log('socket error...');
            term.write(`\x1b[31mError:${err}\x1b[m\r\n`);
            onError && onError();
        };
        ws.onclose = () => {
            console.log('socket disconnect...');
            if (!this.isChange) {
                onClose && onClose();
            }
        };
        ws.onmessage = function (ev) {
            var data = ev.data.slice(1);
            switch (ev.data[0]) {
                case '1':
                case '2':
                case '3':
                    term.write(b64_to_utf8(data));
                    break;
            }
        };
        term.on('data', (data) => {
            console.log('term.on \'data\'...');
            if (ws && ws.readyState === 1)
                ws.send('0' + utf8_to_b64(data));
        });
        return ws;
    }

    close() {
        console.log('close ...');
        this.term.destroy();
        this.socket.close();
    }

    handleResize() {
        console.log('handleResize ...');
        this.term.fit();
    }

    componentWillMount() {
        console.log('componentWillMount ...');

        const { onClose, socketURL } = this.props;
        if (!socketURL) {
            onClose && onClose();
            this.close();
        }
    }

    componentDidMount() {
        console.log('componentDidMount ...');

        const terminalContainer = findDOMNode(this);
        const { term } = this;
        term.open(terminalContainer, false);
        this.props.fullscreen && term.toggleFullscreen();
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount ...');

        this.close();
        window.removeEventListener('resize', this.handleResize);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps ...');

        const { socketURL } = this.props;
        if (socketURL !== nextProps.socketURL) {
            this.isChange = true;
            this.term.reset();
            this.socket.close();
            this.socket = this.createSocket(nextProps.socketURL);
            this.handleResize();
        }
    }

    render() {
        return (
            <div id="terminal-container" />
        );
    }
}

Terminal.defaultProps = {
    title: '\x1b[32mWelcome to use dashboard terminal!\x1b[m\r\n',
    initialEmit: ['auth', 'terminal,50,20'],
    fullscreen: false,
};