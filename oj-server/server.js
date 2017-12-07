const express = require("express");
const app = express();
const path = require('path');
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
// connect mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds123556.mlab.com:23556/oj-mongodb');

app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.use((req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../public/')});
});

app.listen(3000, () => console.log("Listening an port 3000!"));