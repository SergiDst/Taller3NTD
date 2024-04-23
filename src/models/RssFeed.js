const mongoose = require('mongoose');

const rssFeedSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    fechaPub: {
        type: Date,
        required: false,
    },
    autor: {
        type: String,
        required: false,
    },
    categoria: {
        type: String,
        required: false,
    },
    imagen: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('RssFeed', rssFeedSchema);
