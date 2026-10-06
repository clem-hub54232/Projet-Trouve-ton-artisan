import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArtisanCard from '../components/ArtisanCard.jsx';
import Seo from '../components/Seo.jsx';
import { api } from '../services/api.js';

export default function ArtisanListPage() {
  const { slug } = useParams();
  const [data, setData] = useState({ category: null, artisans: [] });
  const [state, setState] = useState('loading');

  useEffect(() => {
    setState('loading');
    api.getArtisansByCategory(slug)
      .then((result) => {
        setData(result);
        setState('success');
      })
      .catch(() => setState('error'));
  }, [slug]);

  const title = data.category?.name || 'Artisans';

  return (
    <section className="section page-section">
      <Seo title={title} description={`Découvrez les artisans de la catégorie ${title} en Auvergne-Rhône-Alpes.`} />
      <div className="container">
        <div className="page-heading">
          <p className="eyebrow">Catégorie</p>
          <h1>{title}</h1>
          <p>Choisissez un professionnel puis consultez sa fiche complète.</p>
        </div>
        {state === 'loading' && <p role="status">Chargement…</p>}
        {state === 'error' && <div className="alert alert-danger" role="alert">Impossible de charger cette catégorie.</div>}
        {state === 'success' && data.artisans.length === 0 && <p>Aucun artisan n'est disponible dans cette catégorie.</p>}
        <div className="row g-4">
          {data.artisans.map((artisan) => (
            <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
