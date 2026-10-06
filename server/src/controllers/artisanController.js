import { Op } from 'sequelize';
import { Artisan, Specialty, Category } from '../models/index.js';
import { normalizeArtisan, publicArtisanAttributes } from '../utils/publicArtisan.js';
import { sendContactEmail } from '../services/mailService.js';

const includes = [{
  model: Specialty,
  as: 'specialty',
  attributes: ['id', 'name'],
  include: [{ model: Category, as: 'category', attributes: ['id', 'name', 'slug'] }],
}];

export async function listArtisans(req, res, next) {
  try {
    const search = (req.query.search || '').trim();
    const where = search ? { name: { [Op.like]: `%${search}%` } } : {};

    const artisans = await Artisan.findAll({
      attributes: publicArtisanAttributes,
      where,
      include: includes,
      order: [['name', 'ASC']],
      limit: 100,
    });

    res.json(artisans.map(normalizeArtisan));
  } catch (error) {
    next(error);
  }
}

export async function listTopArtisans(req, res, next) {
  try {
    const artisans = await Artisan.findAll({
      attributes: publicArtisanAttributes,
      where: { isTop: true },
      include: includes,
      order: [['rating', 'DESC'], ['name', 'ASC']],
      limit: 3,
    });
    res.json(artisans.map(normalizeArtisan));
  } catch (error) {
    next(error);
  }
}

export async function getArtisan(req, res, next) {
  try {
    const artisan = await Artisan.findByPk(req.params.id, { attributes: publicArtisanAttributes, include: includes });
    if (!artisan) return res.status(404).json({ message: 'Artisan introuvable.' });
    res.json(normalizeArtisan(artisan));
  } catch (error) {
    next(error);
  }
}

export async function contactArtisan(req, res, next) {
  try {
    if (req.body.website) return res.status(200).json({ message: 'Votre demande a bien été envoyée.' });

    const artisan = await Artisan.findByPk(req.params.id, { attributes: ['id', 'name', 'email'] });
    if (!artisan) return res.status(404).json({ message: 'Artisan introuvable.' });

    await sendContactEmail({
      artisan,
      senderName: req.body.name,
      senderEmail: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    res.status(202).json({ message: 'Votre demande a bien été envoyée. Une réponse est attendue sous 48h.' });
  } catch (error) {
    next(error);
  }
}
