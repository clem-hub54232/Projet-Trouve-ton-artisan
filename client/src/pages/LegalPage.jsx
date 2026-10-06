import Seo from '../components/Seo.jsx';

const legalContent = {
  'Mentions légales': (
    <>
      <h2>Éditeur du site</h2>
      <p>Le site « Trouve ton artisan » a été réalisé dans le cadre d’un projet pédagogique. Il a pour objectif de faciliter la recherche d’artisans situés en région Auvergne-Rhône-Alpes.</p>
      <p><strong>Projet pédagogique « Trouve ton artisan »</strong><br />Réalisé par : Clément Michenaud</p>

      <h2>Région Auvergne-Rhône-Alpes</h2>
      <p>101 cours Charlemagne<br />CS 20033<br />69269 Lyon Cedex 02 – France<br />Téléphone : +33 (0)4 26 73 40 00</p>

      <h2>Hébergement</h2>
      <p>L’application web est déployée sur Render. La base de données MySQL utilisée par le projet est hébergée sur Aiven.</p>

      <h2>Propriété intellectuelle</h2>
      <p>Les textes, éléments graphiques, logos et autres contenus présents sur ce site sont utilisés dans le cadre de ce projet pédagogique. Toute reproduction ou utilisation doit respecter les droits de leurs propriétaires respectifs.</p>

      <h2>Responsabilité</h2>
      <p>Les informations présentées sur ce site sont fournies dans le cadre d’un exercice pédagogique. Elles ne sauraient engager la responsabilité de la Région Auvergne-Rhône-Alpes.</p>
    </>
  ),

  'Données personnelles': (
    <>
      <h2>Protection des données personnelles</h2>
      <p>Le site « Trouve ton artisan » accorde une attention particulière à la protection des données personnelles.</p>

      <h2>Données collectées</h2>
      <p>Lors de l’utilisation du formulaire de contact, certaines informations peuvent être demandées, notamment le nom, l’adresse e-mail, l’objet de la demande et le contenu du message.</p>

      <h2>Utilisation des données</h2>
      <p>Ces informations sont utilisées uniquement afin de permettre le traitement de la demande de l’utilisateur. Elles ne sont pas destinées à être vendues ou utilisées à des fins publicitaires.</p>
      <p>Dans le cadre de ce projet pédagogique, les informations saisies dans le formulaire de contact n’ont pas vocation à être conservées durablement dans la base de données du site.</p>

      <h2>Droits des utilisateurs</h2>
      <p>Conformément à la réglementation applicable en matière de protection des données personnelles, notamment au RGPD, les utilisateurs disposent notamment de droits d’accès, de rectification et, lorsque les conditions sont réunies, de suppression de leurs données.</p>

      <p>Ce site constitue un projet pédagogique et ne représente pas un service officiel de la Région Auvergne-Rhône-Alpes.</p>
    </>
  ),

  'Accessibilité': (
    <>
      <h2>Accessibilité du site</h2>
      <p>Le site « Trouve ton artisan » a été conçu en prenant en compte différentes bonnes pratiques d’accessibilité numérique.</p>

      <h2>Mesures mises en place</h2>
      <p>Une attention particulière a été portée à la structure des pages, à la lisibilité des contenus, aux contrastes, à la navigation au clavier, aux textes alternatifs des images et à l’adaptation du site aux différentes tailles d’écran.</p>
      <p>Le développement du projet prend comme référence les recommandations WCAG 2.1. Le site est également conçu de manière responsive afin de pouvoir être consulté sur ordinateur, tablette et smartphone.</p>

      <h2>État de conformité</h2>
      <p>Aucun audit complet de conformité n’ayant été réalisé, ce projet pédagogique ne revendique pas une conformité totale aux WCAG 2.1.</p>
      <p>Si un utilisateur rencontre une difficulté d’accès à un contenu ou à une fonctionnalité, celle-ci pourra être étudiée afin d’améliorer l’accessibilité du projet.</p>
    </>
  ),

  'Cookies': (
    <>
      <h2>Utilisation des cookies</h2>
      <p>Le site « Trouve ton artisan » n’utilise pas de cookies publicitaires et ne met pas en œuvre de système destiné au suivi publicitaire des utilisateurs.</p>

      <h2>Mesure d’audience et publicité</h2>
      <p>Dans sa version actuelle, le projet n’intègre pas d’outil de mesure d’audience ou de service publicitaire nécessitant le dépôt de cookies de suivi.</p>
      <p>Par conséquent, aucune information issue de cookies publicitaires n’est vendue ou transmise à des annonceurs.</p>

      <h2>Évolution du site</h2>
      <p>Si de nouvelles fonctionnalités nécessitant l’utilisation de cookies sont ajoutées ultérieurement, les utilisateurs seront informés de leur finalité et leur consentement sera recueilli lorsque la réglementation l’exige.</p>
    </>
  ),
};

export default function LegalPage({ title }) {
  const content = legalContent[title] || <p>Cette page d’information est en cours de rédaction.</p>;

  return (
    <section className="section page-section">
      <Seo title={title} description={`${title} - Trouve ton artisan.`} />
      <div className="container narrow-content">
        <p className="eyebrow">Information</p>
        <h1>{title}</h1>
        <div className="construction-card legal-content">
          {content}
        </div>
      </div>
    </section>
  );
}
