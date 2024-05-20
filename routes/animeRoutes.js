import express from 'express';
import { getAnimes, createAnime, getAnimeById, updateAnime, deleteAnime } from '../controllers/animeController.js';

const router = express.Router();

router.get('/', getAnimes);
router.post('/', createAnime);
router.get('/:id', getAnimeById);
router.put('/:id', updateAnime);
router.delete('/:id', deleteAnime);

export default router;
