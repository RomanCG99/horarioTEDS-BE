const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({

    Unidad: {
        type: String,
        trim: true
    },
    lunes: {
        cliente: {
            type: String,
            trim: true
        },
        destino: {
            type: String,
            trim: true
        }
    },
    martes: {
        cliente: {
            type: String,
            trim: true
        },
        destino: {
            type: String,
            trim: true
        }
    },
    miercoles: {
        cliente: {
            type: String,
            trim: true
        },
        destino: {
            type: String,
            trim: true
        }
    },
    jueves: {
        cliente: {
            type: String,
            trim: true
        },
        destino: {
            type: String,
            trim: true
        }
    },
    viernes: {
        cliente: {
            type: String,
            trim: true
        },
        destino: {
            type: String,
            trim: true
        }
    },
    sabado: {
        cliente: {
            type: String,
            trim: true
        },
        destino: {
            type: String,
            trim: true
        }
    },
    domingo: {
        cliente: {
            type: String,
            trim: true
        },
        destino: {
            type: String,
            trim: true
        }
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);