import Seo from '../components/Seo.jsx';

export default function LegalPage({ title }) {
  return (
    <section className="section page-section">
      <Seo title={title} description={`${title} - Trouve ton artisan.`} />
      <div className="container narrow-content">
        <p className="eyebrow">Information</p>
        <h1>{title}</h1>
        <div className="construction-card">
          <h2>Page en construction</h2>
          <p>Le contenu de cette page sera complété ultérieurement par le cabinet spécialisé.</p>
        </div>
      </div>
    </section>
  );
}
