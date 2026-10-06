import Category from './Category.js';
import Specialty from './Specialty.js';
import Artisan from './Artisan.js';

Category.hasMany(Specialty, { foreignKey: 'categoryId', as: 'specialties', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
Specialty.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

Specialty.hasMany(Artisan, { foreignKey: 'specialtyId', as: 'artisans', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
Artisan.belongsTo(Specialty, { foreignKey: 'specialtyId', as: 'specialty' });

export { Category, Specialty, Artisan };
