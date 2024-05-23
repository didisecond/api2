import express from 'express';
import {
    getAnimes,
    createAnime,
    getAnimeById,
    updateAnime,
    deleteAnime,
    searchAnimesByTitle,
    filterAnimesByGenre
} from '../controllers/animeRoutes.js';

const router = express.Router();

router.get('/animes', getAnimes);
router.post('/animes', createAnime);
router.get('/animes/:id', getAnimeById);
router.put('/animes/:id', updateAnime);
router.delete('/animes/:id', deleteAnime);
router.get('/animes/search', searchAnimesByTitle);
router.get('/animes/filter', filterAnimesByGenre);

export default router;
