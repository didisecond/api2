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
import { check, query } from 'express-validator';

const router = express.Router();

router.get('/animes', getAnimes);
router.post('/animes', createAnime);
router.get('/animes/:id', getAnimeById);
router.put('/animes/:id', updateAnime);
router.delete('/animes/:id', deleteAnime);
router.get('/animes/search', [
    query('titulo').notEmpty().withMessage('El título es obligatorio').trim().escape()
], searchAnimesByTitle);
router.get('/animes/filter', [
    query('genero').notEmpty().withMessage('El género es obligatorio').trim().escape()
], filterAnimesByGenre);

export default router;
