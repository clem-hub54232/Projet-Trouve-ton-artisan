-- Trouve ton artisan - création de la base
-- Compatible MySQL 8+ / MariaDB 10.6+

CREATE DATABASE IF NOT EXISTS trouve_ton_artisan
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE trouve_ton_artisan;

CREATE TABLE IF NOT EXISTS categories (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(80) NOT NULL,
  slug VARCHAR(80) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_categories_name (name),
  UNIQUE KEY uq_categories_slug (slug)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS specialties (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  category_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_specialties_name_category (name, category_id),
  KEY idx_specialties_category (category_id),
  CONSTRAINT fk_specialties_category
    FOREIGN KEY (category_id) REFERENCES categories(id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS artisans (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(160) NOT NULL,
  rating DECIMAL(2,1) NOT NULL,
  city VARCHAR(120) NOT NULL,
  about TEXT NOT NULL,
  email VARCHAR(190) NOT NULL,
  website VARCHAR(255) NULL,
  is_top TINYINT(1) NOT NULL DEFAULT 0,
  specialty_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  KEY idx_artisans_name (name),
  KEY idx_artisans_city (city),
  KEY idx_artisans_top (is_top),
  KEY idx_artisans_specialty (specialty_id),
  CONSTRAINT chk_artisans_rating CHECK (rating >= 0 AND rating <= 5),
  CONSTRAINT fk_artisans_specialty
    FOREIGN KEY (specialty_id) REFERENCES specialties(id)
    ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- Compte applicatif conseillé (à exécuter avec un compte administrateur, puis choisir un mot de passe fort) :
-- CREATE USER 'trouve_artisan_app'@'localhost' IDENTIFIED BY 'CHANGE_ME_STRONG_PASSWORD';
-- GRANT SELECT ON trouve_ton_artisan.* TO 'trouve_artisan_app'@'localhost';
-- FLUSH PRIVILEGES;
