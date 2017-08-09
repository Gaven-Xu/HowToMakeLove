(function () {

    var JoinForm = document.querySelector('#Welcome');
    var JoinBtn = document.querySelector('#Welcome .btn');
    var canSubmit = true;

    JoinForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var nick = JoinForm.nick.value.trim();
        var server = JoinForm.server.value.trim();
        var socket = io('http://'+server);
        console.log(nick,server);
        socket.on('link_success', function () {
            console.log('连接服务器成功');
        })
    })

    JoinBtn.addEventListener('click', function (e) {
        e.preventDefault();
    })


})()