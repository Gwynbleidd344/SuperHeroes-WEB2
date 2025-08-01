import express from 'express';
import { getAllHeroes,getHeroById,deleteHero,addHero,updateHero } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getAllHeroes);
router.get('/:id', getHeroById);
router.delete('/:id', deleteHero);
router.post('/', addHero);
router.put('/:id', updateHero);
export default router;