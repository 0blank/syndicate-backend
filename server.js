const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');

var dir = path.join(__dirname, 'uploads');

const SongRoute = require('./routes/songs');

// mongoose.connect('mongodb://localhost:27017/syndicatedb', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://admin:admin@cluster0.lheaq.mongodb.net/syndicate?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log('Database Connection Established!');
})

const app = express();

app.use(express.static(dir));
app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3010

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/song', SongRoute);