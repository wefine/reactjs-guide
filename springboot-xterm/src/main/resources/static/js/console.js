function utf8_to_b64(str) {
    return window.btoa(window.unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(window.escape(window.atob(str)));
}

function Console() {
    var isChange = false;

    window.term = new Terminal({
        cursorBlink: false,
        cols: 80,
        rows: 24
    });

    term.open(document.getElementById('terminal-container'), true);

    this.createSocket = function (url) {
        window.socket = new window.WebSocket(url, 'base64.channel.k8s.io');
        socket.onopen = function () {
            socket.send('0');
            term.writeln('\x1b[32mWelcome To Dashboard Terminal!\x1b[m');
        };

        socket.onerror = function (err) {
            term.writeln('Error:' + err);

            socket.close();
        };
        socket.onclose = function () {
            if (!isChange) {
                socket.close();
            }
        };
        socket.onmessage = function (ev) {
            var data = ev.data.slice(1);
            switch (ev.data[0]) {
                case '1':
                case '2':
                case '3':
                    term.write(b64_to_utf8(data));
                    break;
                default:
            }
        };
    };

    term.on('data', function (data) {
        if (socket && socket.readyState === 1) {
            socket.send('0' + utf8_to_b64(data));
        }
    });
}

var path = 'ws://localhost:8080/api/v1/namespaces/default/pods/pod-example/exec?stdout=1&stdin=1&stderr=1&tty=1&container=hello-world&command=bash';
var console = new Console();

console.createSocket(path);
