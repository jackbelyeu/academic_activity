import express from 'express';
import mysql from 'mysql2/promise';
import { PORT, PASSWORD } from '@/config';

export const app = express();

app.set('view engine', 'ejs');

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: PASSWORD,
  database: 'academic_activity',
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM User');
    res.render('pages/index', { rows });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

if (import.meta.env.PROD) app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
