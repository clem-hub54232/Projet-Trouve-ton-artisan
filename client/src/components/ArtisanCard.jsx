import { Link } from 'react-router-dom';
import RatingStars from './RatingStars.jsx';

export default function ArtisanCard({ artisan }) {
  const initials = artisan.name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <article className="artisan-card card h-100">
      <div className="card-body">
        <div className="artisan-avatar" aria-hidden="true">{initials}</div>
        <h3 className="h5"><Link className="stretched-link" to={`/artisan/${artisan.id}`}>{artisan.name}</Link></h3>
        <RatingStars value={artisan.rating} />
        <p className="artisan-specialty">{artisan.specialty?.name}</p>
        <p className="artisan-city">{artisan.city}</p>
      </div>
    </article>
  );
}
