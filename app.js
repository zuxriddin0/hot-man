function generateSchedule() {
    const scheduleTable = document.getElementById('schedule').getElementsByTagName('tbody')[0];
    scheduleTable.innerHTML = ''; // Ochiq jadval

    const tasks = [
        { time: "08:00 - 09:15", task: "Birinchi mashq (og‘ir mashq)" },
        { time: "09:15 - 10:00", task: "Nonushta" },
        { time: "10:00 - 18:00", task: "Kun davomida faoliyat" },
        { time: "18:00 - 19:15", task: "Ikkinchi mashq (og‘ir mashq)" },
        { time: "19:15 - 20:00", task: "Kechki ovqat" },
        { time: "20:00 - 22:00", task: "Dam olish va tiklanish" }
    ];

    tasks.forEach(item => {
        const row = scheduleTable.insertRow();
        row.insertCell(0).innerText = item.time;
        row.insertCell(1).innerText = item.task;
    });
}
