const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
app.use(express.static('.'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Change this if your root account has a password
    port: 3306
});

const initializeDatabase = () => {
    db.query('CREATE DATABASE IF NOT EXISTS vprshop', (err) => {
        if (err) {
            console.error('Database creation failed:', err.message);
            process.exit(1);
        }

        db.query('USE vprshop', (useErr) => {
            if (useErr) {
                console.error('Database selection failed:', useErr.message);
                process.exit(1);
            }

            const createTableSql = `
                CREATE TABLE IF NOT EXISTS info (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    address TEXT NOT NULL,
                    phone VARCHAR(50) NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `;

            db.query(createTableSql, (tableErr) => {
                if (tableErr) {
                    console.error('Database initialization failed:', tableErr.message);
                    process.exit(1);
                }

                app.listen(3000, () => {
                    console.log('Server running at http://localhost:3000');
                });
            });
        });
    });
};

db.connect((err) => {
    if (err) {
        console.error('MySQL connection failed:', err.message);
        process.exit(1);
    }

    console.log('Connected to MySQL!');
    initializeDatabase();
});

app.post('/save-customer', (req, res) => {
    const { name, address, phone } = req.body || {};
    const safeName = typeof name === 'string' ? name.trim() : '';
    const safeAddress = typeof address === 'string' ? address.trim() : '';
    const safePhone = typeof phone === 'string' ? phone.trim() : '';

    if (!safeName || !safeAddress || !safePhone) {
        return res.status(400).json({ message: 'Name, address, and phone are required.' });
    }

    const sql = `
        INSERT INTO info (name, address, phone)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [safeName, safeAddress, safePhone], (err, result) => {
        if (err) {
            console.error('Error saving customer:', err.message);
            return res.status(500).json({ message: 'Failed to save customer.' });
        }

        return res.status(201).json({
            message: 'Customer saved successfully.',
            customerId: result.insertId
        });
    });
});