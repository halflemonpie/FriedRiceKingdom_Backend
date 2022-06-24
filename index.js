const express = require('express');
const parser = require('body-parser');
const app = express();
const cors = require('cors');

// middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(cors());

const routes = require('./routes/index');

app.use(routes);

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
