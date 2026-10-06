import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFoundPage() {
  return (
    <section className="section not-found">
      <Seo title="Page non trouvée" description="La page demandée n'existe pas." />
      <div className="container narrow-content text-center">
        <div className="not-found-illustration" aria-hidden="true">404</div>
        <h1>Page non trouvée</h1>
        <p>La page que vous avez demandée n'existe pas ou a été déplacée.</p>
        <Link className="btn btn-primary" to="/">Retourner à l'accueil</Link>
      </div>
    </section>
  );
}
