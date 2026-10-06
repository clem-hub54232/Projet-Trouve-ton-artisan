import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | Trouve ton artisan` : 'Trouve ton artisan | Auvergne-Rhône-Alpes';
  const finalDescription = description || 'Trouvez un artisan en Auvergne-Rhône-Alpes par catégorie, spécialité ou nom.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
    </Helmet>
  );
}
