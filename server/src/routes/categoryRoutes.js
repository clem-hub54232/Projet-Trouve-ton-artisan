import { Router } from 'express';
import { param } from 'express-validator';
import { listCategories, listArtisansByCategory } from '../controllers/categoryController.js';
import { validateRequest } from '../middleware/validate.js';

const router = Router();
router.get('/', listCategories);
router.get(
  '/:slug/artisans',
  param('slug').isSlug().isLength({ min: 2, max: 80 }),
  validateRequest,
  listArtisansByCategory,
);

export default router;
