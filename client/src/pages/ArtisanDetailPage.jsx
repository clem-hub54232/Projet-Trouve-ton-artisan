import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RatingStars from '../components/RatingStars.jsx';
import Seo from '../components/Seo.jsx';
import artisanPlaceholder from '../assets/artisan-placeholder.svg';
import { api } from '../services/api.js';

const initialForm = { name: '', email: '', subject: '', message: '', website: '' };

export default function ArtisanDetailPage() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [state, setState] = useState('loading');
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api.getArtisan(id)
      .then((data) => {
        setArtisan(data);
        setState('success');
      })
      .catch(() => setState('error'));
  }, [id]);

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback({ type: '', message: '' });
    try {
      const result = await api.contactArtisan(id, form);
      setFeedback({ type: 'success', message: result.message });
      setForm(initialForm);
    } catch (error) {
      setFeedback({ type: 'danger', message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  if (state === 'loading') return <div className="container section"><p role="status">Chargement…</p></div>;
  if (state === 'error') return <div className="container section"><div className="alert alert-danger" role="alert">Cet artisan est introuvable.</div></div>;

  return (
    <section className="section page-section">
      <Seo title={artisan.name} description={`${artisan.name}, ${artisan.specialty?.name} à ${artisan.city}. Consultez sa fiche et envoyez-lui une demande.`} />
      <div className="container artisan-detail-grid">
        <article>
          <p className="eyebrow">Fiche artisan</p>
          <div className="detail-hero">
            <img className="artisan-photo" src={artisanPlaceholder} alt={`Illustration de ${artisan.name}`} />
            <div>
              <h1>{artisan.name}</h1>
              <RatingStars value={artisan.rating} />
              <p className="detail-meta"><strong>{artisan.specialty?.name}</strong> · {artisan.city}</p>
            </div>
          </div>
          <div className="detail-block">
            <h2>À propos</h2>
            <p>{artisan.about}</p>
          </div>
          {artisan.website && (
            <div className="detail-block">
              <h2>Site web</h2>
              <a href={artisan.website} target="_blank" rel="noreferrer">Visiter le site de l'artisan</a>
            </div>
          )}
        </article>

        <aside className="contact-card" aria-labelledby="contact-title">
          <h2 id="contact-title">Contacter cet artisan</h2>
          <p>Envoyez votre demande. Une réponse est attendue sous 48h.</p>
          {feedback.message && <div className={`alert alert-${feedback.type}`} role="alert">{feedback.message}</div>}
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Nom</label>
              <input className="form-control" id="name" name="name" value={form.name} onChange={onChange} required minLength={2} maxLength={100} autoComplete="name" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">E-mail</label>
              <input className="form-control" id="email" name="email" type="email" value={form.email} onChange={onChange} required maxLength={160} autoComplete="email" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="subject">Objet</label>
              <input className="form-control" id="subject" name="subject" value={form.subject} onChange={onChange} required minLength={3} maxLength={150} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-control" id="message" name="message" rows="6" value={form.message} onChange={onChange} required minLength={10} maxLength={2000} />
            </div>
            <div className="visually-hidden" aria-hidden="true">
              <label htmlFor="website">Ne pas remplir ce champ</label>
              <input id="website" name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={onChange} />
            </div>
            <button className="btn btn-primary w-100" type="submit" disabled={submitting}>{submitting ? 'Envoi…' : 'Envoyer ma demande'}</button>
          </form>
        </aside>
      </div>
    </section>
  );
}
