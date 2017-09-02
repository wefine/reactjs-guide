const getFetch = () => fetch('http://localhost:3000/data.json')
    .then(function (res) {
        if (res.ok) {
            res.json().then(function (obj) {
                console.log(obj["name"])
            })
        }
    }, function (ex) {
        console.log(ex)
    });


const postFetch = () => fetch('doAct.action', {
    method: 'post',
    headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    credentials: 'include',
    body: 'foo=bar&lorem=ipsum'
})
    .then(json)
    .then(function (data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });

export { getFetch, postFetch };

// http://www.cnblogs.com/ddfe/p/5609697.html