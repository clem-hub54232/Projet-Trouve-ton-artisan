import nodemailer from 'nodemailer';

function smtpIsConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function cleanHeader(value) {
  return String(value || '').replace(/[\r\n]+/g, ' ').trim();
}

export async function sendContactEmail({ artisan, senderName, senderEmail, subject, message }) {
  if (!smtpIsConfigured()) {
    if (process.env.NODE_ENV === 'production') {
      const error = new Error('Le service d’envoi d’e-mails est indisponible.');
      error.status = 503;
      throw error;
    }
    console.info('[DEV] E-mail simulé', {
      to: artisan.email,
      replyTo: senderEmail,
      subject,
      message,
    });
    return { simulated: true };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: artisan.email,
    replyTo: cleanHeader(senderEmail),
    subject: `[Trouve ton artisan] ${cleanHeader(subject)}`,
    text: [
      `Nouvelle demande pour ${artisan.name}`,
      '',
      `Nom : ${cleanHeader(senderName)}`,
      `E-mail : ${cleanHeader(senderEmail)}`,
      `Objet : ${cleanHeader(subject)}`,
      '',
      'Message :',
      String(message || '').trim(),
    ].join('\n'),
  });

  return { simulated: false };
}
