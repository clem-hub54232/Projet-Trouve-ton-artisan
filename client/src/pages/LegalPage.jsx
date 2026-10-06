import Seo from '../components/Seo.jsx';

export default function LegalPage({ title }) {
  return (
    <section className="section page-section">
      <Seo title={title} description={`${title} - Trouve ton artisan.`} />
      <div className="container narrow-content">
        <p className="eyebrow">Information</p>
        <h1>{title}</h1>
        <div className="construction-card">
          <h2>Mentions légales</h2>
          <p>Le site « Trouve ton artisan » a été réalisé dans le cadre d’un projet pédagogique. Il a pour objectif de faciliter la recherche d’artisans situés en région Auvergne-Rhône-Alpes.

            Éditeur du site
            Projet pédagogique « Trouve ton artisan »
            Réalisé par : [Clément Michenaud]

            Informations de contact de la Région Auvergne-Rhône-Alpes
            101 cours Charlemagne
            CS 20033
            69269 Lyon Cedex 02 – France
            Téléphone : +33 (0)4 26 73 40 00

            Hébergement
            L’application web est déployée à l’aide de la plateforme Render. La base de données utilisée par le projet est hébergée sur Aiven.

            Propriété intellectuelle
            Les textes, éléments graphiques, logos et autres contenus présents sur ce site sont utilisés dans le cadre de ce projet pédagogique. Toute reproduction ou utilisation doit respecter les droits de leurs propriétaires respectifs.

            Responsabilité
            Les informations présentées sur ce site sont fournies dans le cadre d’un exercice pédagogique. Elles ne sauraient engager la responsabilité de la Région Auvergne-Rhône-Alpes.</p>
        </div>
      </div>
    </section>
  );
}
