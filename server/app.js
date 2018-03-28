require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 3000;

mongoose.connect(`mongodb://127.0.0.1:27017/jepretgram`, err => {
    if (!err) console.log(`connect to database blog`);
});

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});