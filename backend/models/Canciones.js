const {Schema, model} = require('mongoose');

const CancionesSchema = new Schema({
    FECHA: {type: Date, default: Date.now},
    ID_EXTERNO: {type: String, required: true},
    NOMBRE: {type: String, required: true},
    ALBUM: {type: String, required: true},
    BANDA: {type: String, required: true},
    ARTISTA: {type: String, required: true},
    DURACION: {type: String, required: true },
    GENERO: {type: String, required: true},
    SUBGENERO: {type: String, required: true},
    BANDAS_SIMILARES: {type: String, required: true},
    LABELS: {type: String, required: true},
    INSTRUMENTOS: {type: String, required: true}
});

module.exports = model('Canciones',CancionesSchema);