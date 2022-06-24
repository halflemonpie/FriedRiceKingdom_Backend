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

app.listen(8080, () => {
  console.log('They see me rolling on port...8080');
});
