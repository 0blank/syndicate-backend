const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: {
        type: String
    },
    artist: {
        type: String
    },
    album: {
        type: String
    },
    track: {
        type: String
    },
    description: {
        type: String
    },
    lyrics: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    banner: {
        type: String
    }
})

module.exports = mongoose.model('Song', SongSchema);