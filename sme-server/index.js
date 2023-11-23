const express = require('express');
require('dotenv').config();
const multer = require('multer');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.send('File uploaded!');
});

app.post('/saveData', async (req, res) => {
  const { uen, companyName, fullName, position, email, phone } = req.body;
  try {
    db.query(
      'INSERT INTO company (company_uen, company_name, full_name, position, email, phone) VALUES (?, ?, ?, ?, ?, ?)',
      [uen, companyName, fullName, position, email, phone],
      function (err, results) {
        if (err) {
          console.error('Error saving data to MySQL:', err);
          res
            .status(500)
            .json({ success: false, message: 'Internal Server Error' });
        } else {
          console.log('Data saved to MySQL:', results);
          res.json({
            success: true,
            result: results,
            message: 'Data saved to MySQL db',
          });
        }
      }
    );
  } catch (error) {
    console.error('Error saving data to MySQL:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.get('/getData', async (req, res) => {
  try {
    db.query('SELECT * FROM company', function (err, results, fields) {
      if (err) {
        console.error('Error fetching data from MySQL:', error);
        res
          .status(500)
          .json({ success: false, message: 'Internal Server Error' });
      } else {
        console.log(results);
        console.log(fields);
        res.json({ success: true, data: results });
      }
    });
  } catch (error) {
    console.error('Error fetching data from MySQL:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
