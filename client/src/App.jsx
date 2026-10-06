import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ArtisanListPage from './pages/ArtisanListPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import ArtisanDetailPage from './pages/ArtisanDetailPage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main id="main-content" tabIndex="-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categorie/:slug" element={<ArtisanListPage />} />
          <Route path="/recherche" element={<SearchPage />} />
          <Route path="/artisan/:id" element={<ArtisanDetailPage />} />
          <Route path="/mentions-legales" element={<LegalPage title="Mentions légales" />} />
          <Route path="/donnees-personnelles" element={<LegalPage title="Données personnelles" />} />
          <Route path="/accessibilite" element={<LegalPage title="Accessibilité" />} />
          <Route path="/cookies" element={<LegalPage title="Cookies" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
