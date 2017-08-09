var mysql = require('mysql');
// 短连接模式，用完即关闭
const DBM = class self {

    constructor(_host, _user, _pass, _port, _database) {
        self.config = {
            host: _host,
            user: _user,
            password: _pass,
            port: _port,
            database: _database,
            charset:'utf8'
        }
    }

    query(arg) {
        let connection = mysql.createConnection(self.config)
        connection.connect()
        connection.query(arg)
        connection.end()
    }
}

module.exports = DBM;