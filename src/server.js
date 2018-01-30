const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);


app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server is listening on ${port}`);
});
