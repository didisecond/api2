import Anime from '../models/Anime.js';

// Obtener todos los animes
export const getAnimes = async (req, res) => {
    try {
        const animes = await Anime.find();
        res.json(animes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo anime
export const createAnime = async (req, res) => {
    const { titulo, genero, descripcion, calificacion, fechaDeLanzamiento, enEmision } = req.body;
    const anime = new Anime({ titulo, genero, descripcion, calificacion, fechaDeLanzamiento, enEmision });
    try {
        const newAnime = await anime.save();
        res.status(201).json(newAnime);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener un anime por ID
export const getAnimeById = async (req, res) => {
    try {
        const anime = await Anime.findById(req.params.id);
        if (!anime) {
            return res.status(404).json({ message: 'Anime no encontrado' });
        }
        res.json(anime);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un anime
export const updateAnime = async (req, res) => {
    const { titulo, genero, descripcion, calificacion, fechaDeLanzamiento, enEmision } = req.body;
    try {
        const anime = await Anime.findByIdAndUpdate(
            req.params.id,
            { titulo, genero, descripcion, calificacion, fechaDeLanzamiento, enEmision },
            { new: true }
        );
        if (!anime) {
            return res.status(404).json({ message: 'Anime no encontrado' });
        }
        res.json(anime);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un anime
export const deleteAnime = async (req, res) => {
    try {
        const anime = await Anime.findByIdAndDelete(req.params.id);
        if (!anime) {
            return res.status(404).json({ message: 'Anime no encontrado' });
        }
        res.json({ message: 'Anime eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Buscar animes por título
export const searchAnimesByTitle = async (req, res) => {
    const { titulo } = req.query;
    try {
        const animes = await Anime.find({ titulo: { $regex: titulo, $options: 'i' } });
        res.json(animes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Filtrar animes por género
export const filterAnimesByGenre = async (req, res) => {
    const { genero } = req.query;
    const genresArray = genero.split(',');
    try {
        const animes = await Anime.find({ genero: { $in: genresArray } });
        res.json(animes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
