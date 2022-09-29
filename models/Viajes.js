const mongoose = require('mongoose');

const ViajesSchema = mongoose.Schema({
    nombre:{
        type: String,
        trim: true
    },
    destino:{
        type: String,
        trim: true
    },
    unidad:{
        type: String,
        required: true,
        trim: true
    },
    lunes:{
        nombre:{
            type:String,
            required:false,
            trim:true
        },
        destino:{
            type:String,
            required:false,
            trim:true
        }
    },
    martes:{
        nombre:{
            type:String,
            required:false,
            trim:true
        },
        destino:{
            type:String,
            required:false,
            trim:true
        }
    },
    miercoles:{
        nombre:{
            type:String,
            required:false,
            trim:true
        },
        destino:{
            type:String,
            required:false,
            trim:true
        }
    },
    jueves:{
        nombre:{
            type:String,
            required:false,
            trim:true
        },
        destino:{
            type:String,
            require:false,
            trim:true
        }
    },
    viernes:{
        nombre:{
            type:String,
            required:false,
            trim:true
        },
        destino:{
            type:String,
            required:false,
            trim:true
        }
    },
    sabado:{
        nombre:{
            type:String,
            required:false,
            trim:true
        },
        destino:{
            type:String,
            required:false,
            trim:true
        }
    },
    domingo:{
        nombre:{
            type:String,
            required:false,
            trim:true
        },
        destino:{
            type:String,
            required:false,
            trim:true
        }
    },
    servicio:{
        type:Boolean,
        required: true
    },

    
});

module.exports = mongoose.model('Viajes', ViajesSchema);