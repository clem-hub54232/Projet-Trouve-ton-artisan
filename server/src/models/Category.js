import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Category = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(80), allowNull: false, unique: true, validate: { notEmpty: true, len: [2, 80] } },
  slug: { type: DataTypes.STRING(80), allowNull: false, unique: true, validate: { is: /^[a-z0-9-]+$/ } },
}, { tableName: 'categories' });

export default Category;
