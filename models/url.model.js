const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShortUrlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    shortId: {
        type: String,
        required: true
    }
});

const Shorturl = mongoose.model('shortUrl',ShortUrlSchema);

module.exports = Shorturl;