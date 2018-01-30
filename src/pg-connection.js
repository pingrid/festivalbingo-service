const { Client, Pool } = require('pg');
const pool = new Pool();

const DIMENSION = 5;

module.exports = {
    getUser: function (username, gameId, cb) {
        pool.connect()
            .then(client => {
                return client.query('SELECT * FROM users WHERE name = $1, gameId = $2', [username, gameId])
                    .then(res => {
                        client.release();
                        console.log(res.rows[0]);
                    })
                    .catch(e => {
                        client.release();
                        console.log(err.stack);
                    })
        });
    }
};