import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArtisanCard from '../components/ArtisanCard.jsx';
import Seo from '../components/Seo.jsx';
import { api } from '../services/api.js';

export default function SearchPage() {
  const [params] = useSearchParams();
  const query = useMemo(() => (params.get('q') || '').trim(), [params]);
  const [artisans, setArtisans] = useState([]);
  const [state, setState] = useState('idle');

  useEffect(() => {
    if (query.length < 2) {
      setArtisans([]);
      setState('idle');
      return;
    }
    setState('loading');
    api.searchArtisans(query)
      .then((data) => {
        setArtisans(data);
        setState('success');
      })
      .catch(() => setState('error'));
  }, [query]);

  return (
    <section className="section page-section">
      <Seo title="Recherche" description="Résultats de recherche des artisans en Auvergne-Rhône-Alpes." />
      <div className="container">
        <div className="page-heading">
          <p className="eyebrow">Recherche</p>
          <h1>{query ? `Résultats pour « ${query} »` : 'Rechercher un artisan'}</h1>
        </div>
        {state === 'idle' && <p>Saisissez au moins deux caractères dans la barre de recherche.</p>}
        {state === 'loading' && <p role="status">Recherche en cours…</p>}
        {state === 'error' && <div className="alert alert-danger" role="alert">La recherche a échoué.</div>}
        {state === 'success' && artisans.length === 0 && <p>Aucun artisan ne correspond à votre recherche.</p>}
        <div className="row g-4">
          {artisans.map((artisan) => (
            <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
