export function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err);

  if (process.env.NODE_ENV !== 'test') {
    console.error(err);
  }

  const isProduction = process.env.NODE_ENV === 'production';
  res.status(err.status || 500).json({
    message: err.status && err.status < 500 ? err.message : 'Une erreur interne est survenue.',
    ...(isProduction ? {} : { detail: err.message }),
  });
}
