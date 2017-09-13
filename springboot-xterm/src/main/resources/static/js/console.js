function utf8_to_b64(str) {
    return window.btoa(window.unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(window.escape(window.atob(str)));
}

var term = new Terminal({
    cursorBlink: false,
    cols: 80,
    rows: 24
});

term.open(document.getElementById('terminal-container'), false);

var path = 'ws://localhost:8080/api/v1/namespaces/default/pods/pod-example/exec?stdout=1&stdin=1&stderr=1&tty=1&container=hello-world&command=bash';
var ws = new window.WebSocket(path, 'base64.channel.k8s.io');
var isChange = false;
var title = "\x1b[32mWelcome To Dashboard Terminal!\x1b[m";

ws.onopen = function () {
    ws.send('0');
    term.writeln(title);
};

ws.onerror = function (err) {
    debugger;
    term.writeln('Error:' + err);
    onError && onError();
};
ws.onclose = function () {
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
        default:
    }
};
term.on('data', function (data) {
    if (ws && ws.readyState === 1) {
        ws.send('0' + utf8_to_b64(data));
    }
});

function close() {
    this.term.destroy();
    this.socket.close();
}