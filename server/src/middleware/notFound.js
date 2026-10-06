export function apiNotFound(req, res) {
  res.status(404).json({ message: 'Ressource API introuvable.' });
}
