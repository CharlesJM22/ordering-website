const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
app.use(express.static('.'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Change this if your root account has a password
    database: 'vprshop',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('MySQL connection failed:', err.message);
        return;
    }

    console.log('Connected to MySQL!');
});

app.post('/save-customer', (req, res) => {
    const { name, address, phone } = req.body;

    const sql = `
        INSERT INTO info (name, address, phone)
        VALUES (?, ?, ?)
    `;
    });

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});