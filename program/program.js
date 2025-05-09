const scheduleData = {
    1: [
        {
            time: '9:00 - 10:00',
            title: 'Inauguración del TECHSUMMIT 2025',
            speaker: 'María Rodríguez'
        },
        {
            time: '10:15 - 11:30',
            title: 'El Futuro de la Inteligencia Artificial',
            speaker: 'Dr. Carlos Méndez'
        },
        {
            time: '11:45 - 13:00',
            title: 'Ciberseguridad en la Era Digital',
            speaker: 'Ana Gómez'
        }
    ],
    2: [
        {
            time: '9:00 - 10:15',
            title: 'Blockchain y Web3',
            speaker: 'Fernando Torres'
        },
        {
            time: '10:30 - 11:45',
            title: 'Cloud Computing',
            speaker: 'Laura Sánchez'
        },
        {
            time: '12:00 - 13:15',
            title: 'UX/UI Design',
            speaker: 'Javier Martínez'
        }
    ],
    3: [
        {
            time: '9:00 - 10:15',
            title: 'Computación Cuántica',
            speaker: 'Dr. Roberto Álvarez'
        },
        {
            time: '10:30 - 11:45',
            title: 'DevOps y Metodologías Ágiles',
            speaker: 'Miguel Castro'
        },
        {
            time: '12:00 - 13:15',
            title: 'Big Data y Analytics',
            speaker: 'Sofía Ramírez'
        }
    ]
};

const tabBtns = document.querySelectorAll('.tab-btn');
const scheduleContainer = document.getElementById('scheduleContainer');

function showSchedule(day) {
    scheduleContainer.innerHTML = '';
    scheduleData[day].forEach(item => {
        const scheduleItem = document.createElement('div');
        scheduleItem.className = 'schedule-item';
        scheduleItem.innerHTML = `
            <div class="schedule-time">${item.time}</div>
            <h3>${item.title}</h3>
            <p>Ponente: ${item.speaker}</p>
        `;
        scheduleContainer.appendChild(scheduleItem);
    });
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showSchedule(parseInt(btn.dataset.day));
    });
});

// Show first day schedule by default
showSchedule(1);
