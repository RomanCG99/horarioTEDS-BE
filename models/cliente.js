const mongoose = require('mongoose');

const ClientesSchema = mongoose.Schema({

    cliente: {
        type: String,
        trim: true
    },
    destino: {
        type: String,
        trim: true
    },
    creado:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cliente');