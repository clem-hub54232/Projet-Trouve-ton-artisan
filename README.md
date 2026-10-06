# Trouve ton artisan

Projet full-stack réalisé à partir du brief « Trouve ton artisan » pour la Région Auvergne-Rhône-Alpes.

## Stack imposée

- Front-end : ReactJS, Bootstrap, Sass
- API : Node.js, Express
- Base de données : MySQL/MariaDB avec Sequelize
- Maquettage : Figma (captures de référence fournies dans `docs/maquettes/`)
- Versionnement : Git / GitHub

## Prérequis

- Node.js 18+ (Node.js 20/22 LTS recommandé)
- npm 9+
- MySQL 8+ ou MariaDB 10.6+
- Git

## Installation

1. Cloner le dépôt :

```bash
git clone <URL_DU_REPOSITORY_GITHUB>
cd trouve-ton-artisan
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
├── docs/                   # dossier, schémas, maquettes, veille
├── README.md
└── package.json
```

## Liens à compléter avant rendu

- Maquettes Figma : `<LIEN_FIGMA_A_AJOUTER>`
- Repository GitHub : `<LIEN_GITHUB_A_AJOUTER>`
- Site en ligne : `<LIEN_SITE_A_AJOUTER>`

Ces trois liens dépendent de vos comptes personnels. Les emplacements sont déjà prévus dans le dossier de rendu.

## Police Graphik

Le brief impose Graphik. Pour des raisons de licence, aucun fichier de police n'est inclus dans le dépôt. Le CSS utilise `Graphik` en premier choix et un fallback système. Ajoutez vos fichiers Graphik autorisés dans `client/public/fonts/` et déclarez-les dans `client/src/styles/main.scss` si votre licence le permet.
