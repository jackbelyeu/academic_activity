import express from 'express';
import mysql from 'mysql2/promise';
import { PORT, PASSWORD } from '@/config';

export const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: PASSWORD,
  database: 'academic_activity',
});

app.get('/', (req, res) => {
  res.render('pages/home/index');
});

app.get('/user', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM User');
    res.render('pages/all_users/index', { rows });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.get('/task', async (req, res) => {
  try {
    const [taskData] = await connection.query('SELECT TaskName, StartDate, EndDate, Status FROM Task');
    res.render('pages/task/index', { taskData });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.post('/user', async (req, res) => {
  try {
    const { UserID, UserName, email } = req.body;
    const [newUser] = await connection.query('INSERT INTO User (UserID, UserName, email) VALUES (?, ?, ?)', [
      UserID,
      UserName,
      email,
    ]);
    res.send(newUser);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.get('/projects', async (req, res) => {
  try {
    const [projectData] = await connection.query('SELECT ProjectName, StartDate, EndDate, Status FROM Project');
    res.render('pages/projects/index', { projectData });
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.post('/task', async (req, res) => {
  try {
    const { TaskName, StartDate, EndDate, Status } = req.body;
    const [newTask] = await connection.query(
      'INSERT INTO Task (TaskName, StartDate, EndDate, Status) VALUES (?, ?, ?)',
      [TaskName, StartDate, EndDate, Status]
    );
    res.send(newTask);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

if (import.meta.env.PROD) app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
