# Trouve ton artisan

Projet full-stack réalisé à partir du brief « Trouve ton artisan » pour la Région Auvergne-Rhône-Alpes.

## Stack imposée

- Front-end : ReactJS, Bootstrap, Sass
- API : Node.js, Express
- Base de données : MySQL/MariaDB avec Sequelize
- Maquettage : Figma
- Versionnement : Git / GitHub

## Prérequis

- Node.js 18+ (Node.js 20/22 LTS recommandé)
- npm 9+
- MySQL 8+ ou MariaDB 10.6+
- Git

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/clem-hub54232/Projet-Trouve-ton-artisan.git
cd Projet-Trouve-ton-artisan
```

2. Installer les dépendances :

```bash
npm install
```

3. Créer et alimenter la base de données :

```bash
mysql -u root -p < database/01_create_database.sql
mysql -u root -p < database/02_seed_database.sql
```

4. Configurer l'API :

```bash
cp server/.env.example server/.env
```

Puis renseigner les valeurs du fichier `server/.env`.

5. Démarrer le projet en développement :

```bash
npm run dev
```

- Front-end : http://localhost:5173
- API : http://localhost:3001/api

## Lancement en production

Construire le front-end :

```bash
npm run build
```

Puis démarrer l'API :

```bash
NODE_ENV=production npm start
```

En production, Express sert également le dossier `client/dist`, ce qui permet de déployer le front-end et l'API sur le même domaine.

## Déploiement actuel

Le projet est actuellement déployé avec :

- Front-end React : Render Static Site
- API Node.js / Express : Render Web Service
- Base de données MySQL : Aiven

Pour le front-end déployé, la variable d'environnement suivante permet de joindre l'API :

```env
VITE_API_URL=https://trouve-ton-artisan-swua.onrender.com/api
```

Sur le service backend Render, `FRONTEND_URL` doit correspondre à l'URL du site front-end afin d'autoriser correctement les requêtes CORS.

## Configuration SMTP du formulaire de contact

Le formulaire envoie un e-mail à l'adresse de l'artisan stockée en base. Renseigner dans `server/.env` :

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

En développement, si le SMTP n'est pas configuré, l'API simule l'envoi dans la console. En production, une configuration SMTP valide est obligatoire.

## Sécurité mise en place

- Helmet et Content Security Policy
- en-tête `X-Powered-By` désactivé
- CORS limité à l'origine du front-end
- taille du corps JSON limitée
- validation stricte des paramètres et formulaires avec `express-validator`
- limitation du débit global et du formulaire de contact
- requêtes réalisées via Sequelize (pas de concaténation SQL brute)
- adresses e-mail des artisans non exposées dans l'API publique
- gestion d'erreurs générique en production
- secrets uniquement dans les variables d'environnement
- URL des sites artisans limitée à `http`/`https`
- HTTPS à activer sur l'hébergement de production

## Structure

```text
trouve-ton-artisan/
├── client/                 # application React
├── server/                 # API Express + Sequelize
├── database/               # scripts SQL création + alimentation
├── README.md
└── package.json
```

## Liens du projet

- Maquettes Figma : `<LIEN_FIGMA_A_AJOUTER>`
- Repository GitHub : https://github.com/clem-hub54232/Projet-Trouve-ton-artisan
- Site en ligne : https://trouve-ton-artisan-site.onrender.com
- API : https://trouve-ton-artisan-swua.onrender.com

Le lien Figma est à compléter avant le rendu final.

## Police Graphik

Le brief impose Graphik. Pour des raisons de licence, aucun fichier de police n'est inclus dans le dépôt. Le CSS utilise `Graphik` en premier choix et un fallback système. Ajoutez vos fichiers Graphik autorisés dans `client/public/fonts/` et déclarez-les dans `client/src/styles/main.scss` si votre licence le permet.
