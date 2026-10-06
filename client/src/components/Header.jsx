import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import SearchForm from './SearchForm.jsx';
import { api } from '../services/api.js';

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    api.getCategories().then(setCategories).catch(() => setCategories([]));
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="Trouve ton artisan - accueil" onClick={() => setOpen(false)}>
          <img src={Logo} alt="Trouve ton artisan avec la région Auvergne-Rhône-Alpes" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">☰</span>
          <span className="visually-hidden">Ouvrir ou fermer le menu</span>
        </button>
        <div id="main-navigation" className={`header-content ${open ? 'is-open' : ''}`}>
          <nav aria-label="Navigation principale">
            <ul className="nav-list">
              {categories.map((category) => (
                <li key={category.id}>
                  <NavLink to={`/categorie/${category.slug}`} onClick={() => setOpen(false)}>{category.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <SearchForm compact />
        </div>
      </div>
    </header>
  );
}
