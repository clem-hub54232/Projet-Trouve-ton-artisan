import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Specialty = sequelize.define('Specialty', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(100), allowNull: false, validate: { notEmpty: true, len: [2, 100] } },
  categoryId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, field: 'category_id' },
}, {
  tableName: 'specialties',
  indexes: [{ unique: true, fields: ['name', 'category_id'] }],
});

export default Specialty;
