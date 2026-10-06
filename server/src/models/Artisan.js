import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Artisan = sequelize.define('Artisan', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(160), allowNull: false, validate: { notEmpty: true, len: [2, 160] } },
  rating: { type: DataTypes.DECIMAL(2, 1), allowNull: false, validate: { min: 0, max: 5 } },
  city: { type: DataTypes.STRING(120), allowNull: false, validate: { notEmpty: true, len: [2, 120] } },
  about: { type: DataTypes.TEXT, allowNull: false, validate: { notEmpty: true } },
  email: { type: DataTypes.STRING(190), allowNull: false, validate: { isEmail: true } },
  website: {
    type: DataTypes.STRING(255),
    allowNull: true,
    validate: {
      isAllowedUrl(value) {
        if (!value) return;
        const url = new URL(value);
        if (!['http:', 'https:'].includes(url.protocol)) throw new Error('URL non autorisée');
      },
    },
  },
  isTop: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false, field: 'is_top' },
  specialtyId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'specialty_id' },
}, {
  tableName: 'artisans',
  indexes: [
    { fields: ['name'] },
    { fields: ['city'] },
    { fields: ['specialty_id'] },
    { fields: ['is_top'] },
  ],
});

export default Artisan;
