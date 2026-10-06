export const publicArtisanAttributes = [
  'id',
  'name',
  'rating',
  'city',
  'about',
  'website',
  'isTop',
  'specialtyId',
];

export function normalizeArtisan(artisan) {
  const value = artisan?.toJSON ? artisan.toJSON() : artisan;
  if (!value) return value;
  return { ...value, rating: Number(value.rating) };
}
