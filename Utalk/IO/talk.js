const socketIO = require('socket.io');
// const dbm = require('../DB/dbmanager');
// const ut_db = new dbm('ftpunnuo.gotoftp2.com', 'ftpunnuo', 'ftp10086', '3306', 'ftpunnuo');

var Talk = class self {
    constructor(_s) {

        self.io = socketIO(_s);
        self.clients = {};

        self.io.on('connection', function (socket) {

            console.log(socket.id + ':try to linkin');

            socket.on('regist', function (nickname, fn) {

                var date = new Date();

                if (self.clients.hasOwnProperty(nickname)) {

                    // 名字存在
                    fn({
                        code: 0,
                        m: 'Your nick is existed'
                    })

                    socket.disconnect();

                } else {

                    // 名字不存在, 注册成功，记录nickname、socket.id、last_in_time三个数据，记录绝对时间
                    self.clients[nickname] = {
                        id: socket.id,
                        time: formatTimeOnly(date, '-')
                    };

                    socket.nickname = nickname;

                    // 返回显示时间
                    fn({
                        code: 1,
                        m: 'Morning, ' + nickname + 'Sir!',
                        time: formatTime(date, '-')
                    })

                    // 广播给所有用户，更新各自的用户列表
                    socket.broadcast.emit('new_user', self.clients);

                    console.log(socket.id + '/' + socket.nickname + ':linked');
                    console.log(self.clients);
                }

                /* 
                    ut_db.query(`SELECT * FROM ut_user WHERE nickname="${nickname.toString()}"`,function(err, result, fields){
                        if(err){
                            console.log(err);                  
                        }else{
                            console.log(fields);                  
                        }
                            console.log(result.insertId);                 
                    })

                    ut_db.query(`INSERT INTO ut_user (socketID,nickname) VALUES ('${socket.id.toString()}','${user_name.toString()}')`,function (err, result, fields) {
                        console.log(err, result, fields)
                    })
                */
            })

            socket.on('message', function (data, fn) {

                data.time = formatTime(new Date(), '-');

                fn(data);
                // 后期增加数据库操作，增加到聊天记录

                if (data.to == 'Server') {

                    // 爬虫

                } else if (data.to == "all") {

                    // 广播
                    socket.broadcast.emit('message', data);

                } else if (data.to == data.from) {

                    socket.emit('message', {
                        from: 'Server',
                        to: socket.nickname,
                        m: '别闹',
                        time: formatTime(new Date(), '-')
                    });

                } else if (self.clients[data.to]) {

                    var socket_to = self.clients[data.to];
                    var socket_to_id = socket_to.id;
                    self.io.sockets.sockets[socket_to_id].emit('message', data);

                } else {

                    socket.emit('user_not_in', {
                        from: 'Server',
                        to: socket.nickname,
                        m: `user ${data.to} is not online`,
                        time: formatTime(new Date(), '-')
                    });

                }

            })

            socket.on('localSearch', function (data, fn) {
                data.time = formatTime(new Date(), '-');
                fn(data);
                // 后期增加数据库操作，增加到聊天记录
            })

            socket.on('getClients', function (fn) {
                fn(self.clients);
            })

            socket.on('disconnect', function () {
                delete self.clients[socket.nickname];
                console.log(socket.id + ':closed');
            })


        })

        // // 用户断掉连接之后，从数据库重删除，然后
        // self.io.on('disconnecting',function(i){
        //     console.log(i)
        // })

    }

}

function formatTime(date, str) {
    if (typeof str == "string") {
        return date.getHours() + str + date.getMinutes() + str + date.getSeconds();
    } else {
        console.log('the second argument should be string');
    }
}

function formatTimeOnly(date, str) {
    if (typeof str == "string") {
        return date.getTime() + ':' + date.getHours() + str + date.getMinutes() + str + date.getSeconds();
    } else {
        console.log('the second argument should be string');
    }
}

module.exports = Talk;