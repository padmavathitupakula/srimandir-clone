// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./database/srimandir.db');

app.get('/api/data', (req, res) => {
    db.all('SELECT * FROM table_name', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ data: rows });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// server.js continued
app.post('/api/bookings', (req, res) => {
    const { user, puja, date } = req.body;
    db.run(`INSERT INTO bookings (user, puja, date) VALUES (?, ?, ?)`, [user, puja, date], function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID });
    });
});
