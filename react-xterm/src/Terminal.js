import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';

import Xterm from 'xterm/dist/xterm.js';
import 'xterm/dist/addons/attach/attach.js';
import 'xterm/dist/addons/fit/fit.js';
import 'xterm/dist/xterm.css';
import './Terminal.css';

const utf8_to_b64 = (str) => {
    return window.btoa(window.unescape(encodeURIComponent(str)));
};

const b64_to_utf8 = (str) => {
    return decodeURIComponent(window.escape(window.atob(str)));
};

export default class Terminal extends React.Component {

    constructor(props) {
        super(props);
        this.term = new Xterm({
            cursorBlink: true,
            cols: props.width,
            rows: props.height
        });
        this.socket = this.createSocket(props.socketURL);
        this.handleResize = this.handleResize.bind(this);
        this.isChange = false;
    };

    createSocket(path) {
        const { onError, onClose, title } = this.props;
        const term = this.term;
        const ws = new window.WebSocket(path, 'base64.channel.k8s.io');
        this.isChange = false;

        ws.onopen = () => {
            ws.send('0');
            term.write(title);
        };

        ws.onerror = (err) => {
            term.write(`\x1b[31mError:${err}\x1b[m\r\n`);
            onError && onError();
        };
        ws.onclose = () => {
            if (!this.isChange) {
                onClose && onClose();
            }
        };
        ws.onmessage = function (ev) {
            let data = ev.data.slice(1);
            switch (ev.data[0]) {
                case '1':
                case '2':
                case '3':
                    term.write(b64_to_utf8(data));
                    break;
                default:
            }
        };
        term.on('data', (data) => {
            if (ws && ws.readyState === 1) {
                ws.send('0' + utf8_to_b64(data));
            }
        });
        return ws;
    }

    close() {
        this.term.destroy();
        this.socket.close();
    }

    handleResize() {
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
            <div id="terminal-container" className="terminal" />
        );
    }
}

Terminal.defaultProps = {
    title: '\x1b[32mWelcome To Dashboard Terminal!\x1b[m\r\n',
    width: 80,
    height: 24
};

Terminal.propTypes = {
    socketURL: PropTypes.string.isRequired,
    onError: PropTypes.func,
    onClose: PropTypes.func,
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};