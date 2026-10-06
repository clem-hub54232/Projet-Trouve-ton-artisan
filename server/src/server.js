import 'dotenv/config';
import app from './app.js';
import { sequelize } from './config/database.js';
import './models/index.js';

const port = Number(process.env.PORT || 3001);

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Connexion MySQL établie.');
    app.listen(port, () => console.log(`API disponible sur http://localhost:${port}`));
  } catch (error) {
    console.error('Impossible de démarrer l’application :', error.message);
    process.exit(1);
  }
}

start();
