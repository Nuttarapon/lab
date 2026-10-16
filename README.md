# Lab Equipment & Room Reservation System (ระบบจองห้องปฏิบัติการและอุปกรณ์แล็บ)

## วัตถุประสงค์
พัฒนาเว็บแอปพลิเคชันแบบ Full-stack ประกอบด้วยระบบฝั่งเซิร์ฟเวอร์ (Backend) และฝั่งไคลเอนต์ (Frontend) พร้อมเชื่อมต่อฐานข้อมูล SQLite สำหรับจัดการข้อมูลการจอง (CRUD)

## เทคโนโลยีที่ใช้
- Frontend: HTML, CSS, JavaScript (Fetch API)
- Backend: Node.js, Express.js
- Database: SQLite3

## โครงสร้างโปรเจกต์
- /public: โค้ดฝั่งไคลเอนต์ (HTML, CSS, JavaScript)
- /server.js: โค้ดฝั่งเซิร์ฟเวอร์และเชื่อมต่อฐานข้อมูล
- package.json: จัดการแพ็กเกจและ Dependencies ของโปรเจกต์

## วิธีการติดตั้ง
1. ดาวน์โหลดหรือโคลน Repository นี้ลงเครื่องคอมพิวเตอร์
2. เปิด Terminal ที่โฟลเดอร์หลักของโปรเจกต์แล้วรันคำสั่งติดตั้ง Dependencies:
   ```bash
   npm install