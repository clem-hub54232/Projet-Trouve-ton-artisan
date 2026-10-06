import { useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm({ compact = false }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputId = useId();

  const onSubmit = (event) => {
    event.preventDefault();
    const value = query.trim();
    if (value.length < 2) return;
    navigate(`/recherche?q=${encodeURIComponent(value)}`);
  };

  return (
    <form className={`search-form ${compact ? 'search-form--compact' : ''}`} role="search" onSubmit={onSubmit}>
      <label className="visually-hidden" htmlFor={inputId}>Rechercher un artisan par nom</label>
      <input
        id={inputId}
        className="form-control"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un artisan"
        minLength={2}
        maxLength={80}
        aria-label="Rechercher un artisan par nom"
      />
      <button className="btn btn-primary" type="submit">Rechercher</button>
    </form>
  );
}
