const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// เชื่อมต่อฐานข้อมูล SQLite ในโฟลเดอร์ server
const dbFile = path.join(__dirname, 'database.db');
const db = new sqlite3.Database(dbFile, (err) => {
    if (err) console.error('Error opening database', err.message);
    else console.log('Connected to SQLite database.');
});

// สร้าง Table สำหรับเก็บข้อมูลการจองแล็บอัตโนมัติถ้ายังไม่มี
db.run(`CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    requester TEXT NOT NULL,
    equipment TEXT NOT NULL,
    date TEXT NOT NULL,
    time_slot TEXT NOT NULL,
    purpose TEXT,
    status TEXT DEFAULT 'Pending'
)`);

// 1. GET: ดึงข้อมูลการจองทั้งหมด
app.get('/api/reservations', (req, res) => {
    db.all(`SELECT * FROM reservations ORDER BY id DESC`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ data: rows });
    });
});

// 2. POST: เพิ่มรายการจองใหม่
app.post('/api/reservations', (req, res) => {
    const { requester, equipment, date, time_slot, purpose } = req.body;
    if (!requester || !equipment || !date || !time_slot) {
        return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const query = `INSERT INTO reservations (requester, equipment, date, time_slot, purpose) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [requester, equipment, date, time_slot, purpose], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Reservation created successfully', id: this.lastID });
    });
});

// 3. DELETE: ลบรายการจอง
app.delete('/api/reservations/:id', (req, res) => {
    db.run(`DELETE FROM reservations WHERE id = ?`, req.params.id, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Reservation deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});