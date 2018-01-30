const express = require('express');
const bodyParser = require('body-parser');
//const database_connection = require('./database_connection');
const database_connection = require('./mockDB');

const app = express();
const port = 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
		res.sendStatus(201);
	});
});

app.post('/api/board/:boardId/:fieldId', (req, res) => {
	database_connection.updateTile(req.params.boardId, req.params.fieldId, req.body, (result, error) => {
		if (error) {
			res.sendStatus(400);
			return;
		}
		res.sendStatus(204);
	});
});

app.get('/api/user/:gameId/:username', (req, res) => {
    database_connection.getUser(req.params.gameId, req.params.username, (result, error) => {
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

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server is listening on ${port}`);
});
