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
