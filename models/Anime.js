import mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
    titulo: String,
    genero: [String],
    descripcion: String,
    calificacion: { type: Number, default: 0 },
    fechaDeLanzamiento: String,
    enEmision: Boolean,
    _id: String
});

const Anime = mongoose.model('Anime', animeSchema);

export default Anime;
