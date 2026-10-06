# Veille sécurité - Trouve ton artisan

## Périmètre

La veille a porté sur les risques les plus pertinents pour une application React + Express + MySQL : contrôle d'accès, mauvaise configuration, dépendances, injection SQL, XSS, divulgation de données, abus du formulaire de contact et gestion des erreurs.

## Sources suivies

- OWASP Top 10:2025 : https://top10.owasp.org/2025/
- OWASP SQL Injection Prevention Cheat Sheet : https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
- OWASP Cross Site Scripting Prevention Cheat Sheet : https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
- OWASP Content Security Policy Cheat Sheet : https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
- Express - Production Best Practices: Security : https://expressjs.com/en/advanced/best-practice-security.html
- Sequelize - Validations & Constraints : https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/

## Points examinés et mesures appliquées

### Injection SQL

Risque : une recherche ou un identifiant malveillant pourrait modifier une requête SQL si des chaînes étaient concaténées manuellement.

Correction : l'application utilise Sequelize et ses opérateurs de requête. Les identifiants et recherches sont validés avant leur utilisation. Aucune requête SQL brute concaténée avec une entrée utilisateur n'est présente.

### XSS

Risque : exécuter du HTML ou du JavaScript injecté depuis la base ou un formulaire.

Correction : React échappe les chaînes rendues par défaut, aucun `dangerouslySetInnerHTML` n'est utilisé et Helmet ajoute une Content Security Policy. Les URL de sites artisans sont limitées à HTTP/HTTPS.

### Divulgation de l'adresse e-mail des artisans

Risque identifié lors de la conception : renvoyer directement le modèle Sequelize complet exposerait l'adresse e-mail professionnelle dans l'API publique.

Correction : les contrôleurs utilisent une liste d'attributs publics qui exclut `email`. L'adresse n'est récupérée côté serveur que lors de l'envoi du formulaire de contact.

### Spam et déni de service sur le formulaire

Risque : automatisation d'envois de messages ou corps de requêtes excessifs.

Correction : limitation du débit spécifique au formulaire (5 demandes / 15 minutes / IP), limite globale de requêtes, corps JSON limité à 20 Ko, longueurs maximales des champs et champ piège anti-bot.

### Mauvaise configuration HTTP

Risque : en-têtes de sécurité absents, fuite de la technologie serveur, origines non contrôlées.

Correction : Helmet, suppression de `X-Powered-By`, CORS limité au front-end déclaré et gestion d'erreurs générique en production.

### Dépendances vulnérables

Risque : faille connue dans une dépendance npm.

Mesure : conserver `package-lock.json`, lancer `npm audit --omit=dev` avant chaque livraison, appliquer les mises à jour compatibles et consulter les avis de sécurité Node/Express/GitHub.

### Secrets et configuration

Risque : mot de passe MySQL ou SMTP présent dans Git.

Correction : les secrets passent par `server/.env`, exclu par `.gitignore`. Seul `.env.example` est versionné.

### Accès à l'API

Le brief demande de limiter l'accès à l'API à l'application. Une clé placée dans une SPA React serait visible par l'utilisateur et ne constituerait donc pas un secret. Le choix retenu est un déploiement front + API sous la même origine, CORS restreint et base MySQL inaccessible au navigateur. Si l'infrastructure le permet, l'API doit être placée derrière le reverse proxy du site et ne pas être publiée sur un domaine API séparé.

### Transport réseau

En production le site doit être servi en HTTPS. Helmet active notamment HSTS lorsque la requête passe correctement par le proxy HTTPS.

## Vérifications à effectuer avant rendu

1. `npm audit --omit=dev`
2. validation W3C du HTML généré
3. audit Lighthouse / axe pour l'accessibilité
4. vérification des en-têtes HTTP en production
5. test manuel des entrées malformées et limites de longueur
6. test du formulaire SMTP avec un compte de test
