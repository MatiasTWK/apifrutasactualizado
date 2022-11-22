const mongoose = require('mongoose');

//MODELO DE DATOS
const frutaSchema = mongoose.Schema({
    nombre: {
        type:String,
        required: true,
        unique: true
    },
    precio: {
        type:Number,
        required: true,
    }
});

module.exports = mongoose.model("Fruta", frutaSchema);

