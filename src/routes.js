const database_connection = require('./database_connection');
//const database_connection = require('./mockDB');

module.exports = function(app) {
    app.get('/api/all-users', (req, res) => {
        database_connection.getAllUsers((result, error) => {
            if (error) {
                res.sendStatus(400);
                return;
            }

            res.send(result);
        });
    });

    app.post('/api/register', (req, res) => {
        database_connection.addUser(req.body, (result, error) => {
            if (error) {
                res.sendStatus(404);
                return;
            }
            database_connection.createBoard()
            res.sendStatus(201);
        });
    });

    app.post('/api/board/:boardId/:tileId', (req, res) => {
        database_connection.updateField(req.params.boardId, req.params.tileId, req.body, (result, error) => {
            if (error) {
                res.sendStatus(400);
                return;
            }
            res.sendStatus(204);
        });
    });

    app.get('/api/user/:gameId/:username', (req, res) => {
        database_connection.getUser(req.params.username, req.params.gameId, (result, error) => {
            if (error) {
                res.sendStatus(400);
                return;
            }

            res.send(result);
        });
    });

    app.get(`/api/board/:boardId`, (req, res) => {
        database_connection.getBoard(req.params.boardId, (result, error) => {
            if (error) {
                res.sendStatus(400);
                return;
            }

            res.send(result);
        });
    });
};