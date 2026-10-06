export default function RatingStars({ value }) {
  const rating = Number(value) || 0;
  const percentage = `${Math.max(0, Math.min(100, (rating / 5) * 100))}%`;

  return (
    <div className="rating" aria-label={`Note ${rating.toFixed(1)} sur 5`}>
      <span className="stars" aria-hidden="true">
        <span className="stars-empty">★★★★★</span>
        <span className="stars-fill" style={{ width: percentage }}>★★★★★</span>
      </span>
      <span className="rating-value">{rating.toFixed(1)}/5</span>
    </div>
  );
}
