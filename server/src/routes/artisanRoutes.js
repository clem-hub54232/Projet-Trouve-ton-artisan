import { Router } from 'express';
import { body, param, query } from 'express-validator';
import rateLimit from 'express-rate-limit';
import { contactArtisan, getArtisan, listArtisans, listTopArtisans } from '../controllers/artisanController.js';
import { validateRequest } from '../middleware/validate.js';

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { message: 'Trop de demandes envoyées. Réessayez dans quelques minutes.' },
});

router.get(
  '/',
  query('search').optional().trim().isLength({ min: 2, max: 80 }),
  validateRequest,
  listArtisans,
);
router.get('/top', listTopArtisans);
router.get(
  '/:id',
  param('id').isInt({ min: 1, max: 2147483647 }),
  validateRequest,
  getArtisan,
);
router.post(
  '/:id/contact',
  contactLimiter,
  param('id').isInt({ min: 1, max: 2147483647 }),
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Le nom doit contenir entre 2 et 100 caractères.'),
  body('email').trim().isEmail().normalizeEmail().isLength({ max: 160 }).withMessage('Adresse e-mail invalide.'),
  body('subject').trim().isLength({ min: 3, max: 150 }).withMessage('L’objet doit contenir entre 3 et 150 caractères.'),
  body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Le message doit contenir entre 10 et 2000 caractères.'),
  body('website').optional({ checkFalsy: true }).isEmpty().withMessage('Champ invalide.'),
  validateRequest,
  contactArtisan,
);

export default router;
