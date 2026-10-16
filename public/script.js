const API_URL = 'http://localhost:3000/api/reservations';

async function fetchReservations() {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        const tbody = document.getElementById('reservationTableBody');
        tbody.innerHTML = '';

        result.data.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.id}</td>
                <td>${item.requester}</td>
                <td>${item.equipment}</td>
                <td>${item.date}</td>
                <td>${item.time_slot}</td>
                <td>${item.status}</td>
                <td>
                    <button class="btn-delete" onclick="deleteReservation(${item.id})">ลบ</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (err) {
        console.error('Error fetching data:', err);
    }
}

document.getElementById('reservationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        requester: document.getElementById('requester').value,
        equipment: document.getElementById('equipment').value,
        date: document.getElementById('date').value,
        time_slot: document.getElementById('time_slot').value,
        purpose: document.getElementById('purpose').value
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            document.getElementById('reservationForm').reset();
            fetchReservations();
        } else {
            alert('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
        }
    } catch (err) {
        console.error('Error saving data:', err);
    }
});

async function deleteReservation(id) {
    if (!confirm('คุณต้องการลบรายการจองนี้ใช่หรือไม่?')) return;
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (response.ok) {
            fetchReservations();
        } else {
            alert('ไม่สามารถลบข้อมูลได้');
        }
    } catch (err) {
        console.error('Error deleting data:', err);
    }
}

fetchReservations();