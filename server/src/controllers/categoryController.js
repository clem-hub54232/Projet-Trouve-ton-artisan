import { Category, Specialty, Artisan } from '../models/index.js';
import { normalizeArtisan, publicArtisanAttributes } from '../utils/publicArtisan.js';

export async function listCategories(req, res, next) {
  try {
    const categories = await Category.findAll({ attributes: ['id', 'name', 'slug'], order: [['name', 'ASC']] });
    res.json(categories);
  } catch (error) {
    next(error);
  }
}

export async function listArtisansByCategory(req, res, next) {
  try {
    const category = await Category.findOne({ where: { slug: req.params.slug }, attributes: ['id', 'name', 'slug'] });
    if (!category) return res.status(404).json({ message: 'Catégorie introuvable.' });

    const artisans = await Artisan.findAll({
      attributes: publicArtisanAttributes,
      include: [{
        model: Specialty,
        as: 'specialty',
        attributes: ['id', 'name'],
        required: true,
        where: { categoryId: category.id },
      }],
      order: [['name', 'ASC']],
    });

    res.json({ category, artisans: artisans.map(normalizeArtisan) });
  } catch (error) {
    next(error);
  }
}
