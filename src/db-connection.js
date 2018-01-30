const mysql = require('mysql');

const options = {
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.DATABASE_NAME,
	port: process.env.DATABASE_PORT,
	host: process.env.DATABASE_IP
};

function connect() {
	return mysql.createConnection(options);
}

module.exports = {
	deletePart: function (serialnumber, cb) {
		connect().query(
			'DELETE FROM robotparts WHERE serialnumber = ?', [serialnumber],
			(err, results) => {
				cb(results, err);
			}
		);
	},

	updateTile: function (serialnumber, updateInfo, cb) {
		connect().query(
			'UPDATE robotparts SET name = ?, manufacturer = ?, weight = ? WHERE serialnumber = ?',
			[updateInfo.name, updateInfo.manufacturer, updateInfo.weight, serialnumber],
			(err, results) => {
				cb(results, err);
			}
		);
	},

	addUser: function (updateInfo, cb) {
		connect().query(
			'INSERT INTO users (name, email, game) VALUES(?, ?, ?)',
			[updateInfo.name, updateInfo.email,updateInfo.game],
			(err, results) => {
				cb(results, err);
			}
		);
	},

    getUser: function (username, cb) {
		cb();
    }
};