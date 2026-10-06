import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArtisanCard from '../components/ArtisanCard.jsx';
import SearchForm from '../components/SearchForm.jsx';
import Seo from '../components/Seo.jsx';
import { api } from '../services/api.js';

export default function HomePage() {
  const [topArtisans, setTopArtisans] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([api.getTopArtisans(), api.getCategories()])
      .then(([top, cats]) => {
        setTopArtisans(top);
        setCategories(cats);
      })
      .catch(() => setError('Les informations ne peuvent pas être chargées pour le moment.'));
  }, []);

  return (
    <>
      <Seo description="Trouvez simplement un artisan en Auvergne-Rhône-Alpes et contactez-le pour vos renseignements, prestations ou tarifs." />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Avec la région Auvergne-Rhône-Alpes</p>
            <h1>Trouvez l'artisan qu'il vous faut, près de chez vous.</h1>
            <p className="lead">Recherchez un professionnel par nom ou explorez les métiers de l'alimentation, du bâtiment, de la fabrication et des services.</p>
            <SearchForm />
          </div>
          <div className="hero-panel" aria-label="Catégories d'artisanat">
            <h2 className="h4">Explorer les catégories</h2>
            <div className="category-links">
              {categories.map((category) => (
                <Link key={category.id} to={`/categorie/${category.slug}`}>{category.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Simple et rapide</p>
            <h2>Comment trouver mon artisan ?</h2>
          </div>
          <ol className="steps-grid">
            <li><span>1</span><div><h3>Choisir la catégorie d'artisanat dans le menu.</h3></div></li>
            <li><span>2</span><div><h3>Choisir un artisan.</h3></div></li>
            <li><span>3</span><div><h3>Le contacter via le formulaire de contact.</h3></div></li>
            <li><span>4</span><div><h3>Une réponse sera apportée sous 48h.</h3></div></li>
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Sélection régionale</p>
            <h2>Les artisans du mois</h2>
          </div>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <div className="row g-4">
            {topArtisans.map((artisan) => (
              <div className="col-12 col-md-4" key={artisan.id}>
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
