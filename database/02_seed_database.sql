-- Trouve ton artisan - alimentation de la base
-- Données reprises du fichier data.xlsx fourni avec le brief.

USE trouve_ton_artisan;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE artisans;
TRUNCATE TABLE specialties;
TRUNCATE TABLE categories;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO categories (name, slug) VALUES
  ('Alimentation', 'alimentation'),
  ('Bâtiment', 'batiment'),
  ('Fabrication', 'fabrication'),
  ('Services', 'services');

INSERT INTO specialties (name, category_id) VALUES
  ('Boucher', (SELECT id FROM categories WHERE name = 'Alimentation' LIMIT 1)),
  ('Boulanger', (SELECT id FROM categories WHERE name = 'Alimentation' LIMIT 1)),
  ('Chocolatier', (SELECT id FROM categories WHERE name = 'Alimentation' LIMIT 1)),
  ('Traiteur', (SELECT id FROM categories WHERE name = 'Alimentation' LIMIT 1)),
  ('Chauffagiste', (SELECT id FROM categories WHERE name = 'Bâtiment' LIMIT 1)),
  ('Electricien', (SELECT id FROM categories WHERE name = 'Bâtiment' LIMIT 1)),
  ('Menuisier', (SELECT id FROM categories WHERE name = 'Bâtiment' LIMIT 1)),
  ('Plombier', (SELECT id FROM categories WHERE name = 'Bâtiment' LIMIT 1)),
  ('Bijoutier', (SELECT id FROM categories WHERE name = 'Fabrication' LIMIT 1)),
  ('Couturier', (SELECT id FROM categories WHERE name = 'Fabrication' LIMIT 1)),
  ('Ferronier', (SELECT id FROM categories WHERE name = 'Fabrication' LIMIT 1)),
  ('Coiffeur', (SELECT id FROM categories WHERE name = 'Services' LIMIT 1)),
  ('Fleuriste', (SELECT id FROM categories WHERE name = 'Services' LIMIT 1)),
  ('Toiletteur', (SELECT id FROM categories WHERE name = 'Services' LIMIT 1)),
  ('Webdesign', (SELECT id FROM categories WHERE name = 'Services' LIMIT 1));

INSERT INTO artisans (name, rating, city, about, email, website, is_top, specialty_id) VALUES
  ('Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', NULL, 0, (SELECT id FROM specialties WHERE name = 'Boucher' AND category_id = (SELECT id FROM categories WHERE name = 'Alimentation' LIMIT 1) LIMIT 1)),
  ('Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', NULL, 1, (SELECT id FROM specialties WHERE name = 'Boulanger' AND category_id = (SELECT id FROM categories WHERE name = 'Alimentation' LIMIT 1) LIMIT 1)),
  ('Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, (SELECT id FROM specialties WHERE name = 'Chocolatier' AND category_id = (SELECT id FROM categories WHERE name = 'Alimentation' LIMIT 1) LIMIT 1)),
  ('Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0, (SELECT id FROM specialties WHERE name = 'Traiteur' AND category_id = (SELECT id FROM categories WHERE name = 'Alimentation' LIMIT 1) LIMIT 1)),
  ('Orville Salmons', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', NULL, 1, (SELECT id FROM specialties WHERE name = 'Chauffagiste' AND category_id = (SELECT id FROM categories WHERE name = 'Bâtiment' LIMIT 1) LIMIT 1)),
  ('Mont Blanc Eléctricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0, (SELECT id FROM specialties WHERE name = 'Electricien' AND category_id = (SELECT id FROM categories WHERE name = 'Bâtiment' LIMIT 1) LIMIT 1)),
  ('Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0, (SELECT id FROM specialties WHERE name = 'Menuisier' AND category_id = (SELECT id FROM categories WHERE name = 'Bâtiment' LIMIT 1) LIMIT 1)),
  ('Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0, (SELECT id FROM specialties WHERE name = 'Plombier' AND category_id = (SELECT id FROM categories WHERE name = 'Bâtiment' LIMIT 1) LIMIT 1)),
  ('Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', NULL, 0, (SELECT id FROM specialties WHERE name = 'Bijoutier' AND category_id = (SELECT id FROM categories WHERE name = 'Fabrication' LIMIT 1) LIMIT 1)),
  ('Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0, (SELECT id FROM specialties WHERE name = 'Couturier' AND category_id = (SELECT id FROM categories WHERE name = 'Fabrication' LIMIT 1) LIMIT 1)),
  ('Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', NULL, 0, (SELECT id FROM specialties WHERE name = 'Ferronier' AND category_id = (SELECT id FROM categories WHERE name = 'Fabrication' LIMIT 1) LIMIT 1)),
  ('Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', NULL, 0, (SELECT id FROM specialties WHERE name = 'Coiffeur' AND category_id = (SELECT id FROM categories WHERE name = 'Services' LIMIT 1) LIMIT 1)),
  ('Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 0, (SELECT id FROM specialties WHERE name = 'Coiffeur' AND category_id = (SELECT id FROM categories WHERE name = 'Services' LIMIT 1) LIMIT 1)),
  ('C''est sup''hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0, (SELECT id FROM specialties WHERE name = 'Coiffeur' AND category_id = (SELECT id FROM categories WHERE name = 'Services' LIMIT 1) LIMIT 1)),
  ('Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0, (SELECT id FROM specialties WHERE name = 'Fleuriste' AND category_id = (SELECT id FROM categories WHERE name = 'Services' LIMIT 1) LIMIT 1)),
  ('Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', NULL, 0, (SELECT id FROM specialties WHERE name = 'Toiletteur' AND category_id = (SELECT id FROM categories WHERE name = 'Services' LIMIT 1) LIMIT 1)),
  ('CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0, (SELECT id FROM specialties WHERE name = 'Webdesign' AND category_id = (SELECT id FROM categories WHERE name = 'Services' LIMIT 1) LIMIT 1));
