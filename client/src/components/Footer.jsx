import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2 className="h5">Région Auvergne-Rhône-Alpes</h2>
          <address>
            101 cours Charlemagne<br />
            CS 20033<br />
            69269 Lyon Cedex 02<br />
            France<br />
            <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
          </address>
        </div>
        <nav aria-label="Pages légales">
          <h2 className="h5">Informations</h2>
          <ul>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
            <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
            <li><Link to="/accessibilite">Accessibilité</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
