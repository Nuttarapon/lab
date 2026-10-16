# Lab Equipment & Room Reservation System (ระบบจองห้องปฏิบัติการและอุปกรณ์แล็บ)

## 📌 วัตถุประสงค์
พัฒนาเว็บแอปพลิเคชันขนาดเล็กแบบ Full-stack ที่มีทั้งฝั่งเซิร์ฟเวอร์ (Backend) และฝั่งไคลเอนต์ (Frontend) พร้อมเชื่อมต่อกับฐานข้อมูล SQLite เพื่อฝึกฝนทักษะการพัฒนาเว็บไซต์และการจัดการข้อมูล (CRUD)

## 🛠️ เทคโนโลยีที่ใช้
- **Frontend:** HTML, CSS, JavaScript (Fetch API)
- **Backend:** Node.js, Express.js
- **Database:** SQLite3

## 📁 โครงสร้างโปรเจกต์
- `/public`: โค้ดฝั่งไคลเอนต์ (HTML, CSS, JavaScript)
- `/server.js`: โค้ดฝั่งเซิร์ฟเวอร์และเชื่อมต่อฐานข้อมูล
- `package.json`: จัดการแพ็กเกจและ Dependencies ของโปรเจกต์

## ⚙️ วิธีการติดตั้ง (Installation)
1. Clone หรือดาวน์โหลด Repository นี้ลงมาที่เครื่องคอมพิวเตอร์ของคุณ
2. เปิด Terminal ที่โฟลเดอร์หลักของโปรเจกต์ แล้วติดตั้ง Dependencies:
   ```bash
   npm install