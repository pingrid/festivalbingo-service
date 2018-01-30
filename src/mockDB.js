module.exports = {

    updateTile: function (boardId, fieldId, json, cb) {
        console.log(boardId, fieldId, json);
        cb()
    },

    addUser: function (updateInfo, cb) {
        cb();
    },

    getUser: function (boardId, username, cb) {
        var user = `{
            "username": "${username}",
            "email": "test@test.no"
        }`;
        cb(user);
    },

    getAllUsers: function (cb) {
        var users = `[{
            "username": "linepine",
            "email": "test@test.no",
            "gameId": 1
        }, {
            "username": "pingrid",
            "email": "test@test.no",
            "gameId": 1
        }]`;
        cb(users);
    },

    getBoard: function (boardId, cb) {
        var tiles = [];
        var tileId = 0;
        var fieldId = 0;
        for (i = 0; i < 5; i++) {
            for (j = 0; j < 5; j++) {
                tiles.push(` {
                    "tileId": "${tileId}",
                    "posy": "${i}",
                    "posx": "${j}",
                    "fields": [
                        {
                            "rowNumber": 0,
                            "artist": "Lars Vaular",
                            "fieldId": "${Math.floor(Math.random() * Math.floor(234567))}"
                        },
                        {
                            "rowNumber": 1,
                            "artist": "Kygo",
                            "fieldId": "${Math.floor(Math.random() * Math.floor(234567))}"
                        },
                        {
                            "rowNumber": 2,
                            "artist": "Foo Fighters",
                            "fieldId": "${Math.floor(Math.random() * Math.floor(234567))}"
                        }
                    ]
                }`);
                tileId++;
            }
        }

        cb(`{
            "id": "${boardId}",
            "dimensions": 5,
            "tiles": [
               ${tiles}
           ]
        }`);
    }
};