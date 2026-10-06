const API_BASE = import.meta.env.VITE_API_URL || '/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  let body = null;
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    body = await response.json();
  }

  if (!response.ok) {
    throw new Error(body?.message || 'Une erreur est survenue.');
  }

  return body;
}

export const api = {
  getCategories: () => request('/categories'),
  getTopArtisans: () => request('/artisans/top'),
  getArtisansByCategory: (slug) => request(`/categories/${encodeURIComponent(slug)}/artisans`),
  searchArtisans: (query) => request(`/artisans?search=${encodeURIComponent(query)}`),
  getArtisan: (id) => request(`/artisans/${encodeURIComponent(id)}`),
  contactArtisan: (id, payload) => request(`/artisans/${encodeURIComponent(id)}/contact`, {
    method: 'POST',
    body: JSON.stringify(payload),
  }),
};
