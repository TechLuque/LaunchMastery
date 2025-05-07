// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Countdown timer
function updateCountdown() {
    const eventDate = new Date('2025-06-15T09:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Speakers data


// Program tabs functionality
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

// FAQ functionality
const faqs = [
    {
        question: '¿Cómo puedo acceder al evento virtual?',
        answer: 'Una vez completado tu registro, recibirás un correo electrónico con un enlace de acceso único a nuestra plataforma virtual.'
    },
    {
        question: '¿Estarán disponibles las grabaciones?',
        answer: 'Sí, todas las sesiones serán grabadas y estarán disponibles para los participantes registrados durante 30 días después del evento.'
    },
    {
        question: '¿El evento tendrá traducción simultánea?',
        answer: 'Sí, ofreceremos traducción simultánea en inglés y español para todas las sesiones principales.'
    }
];

const faqContainer = document.getElementById('faqContainer');
faqs.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
        <div class="faq-question">
            ${faq.question}
            <span class="toggle">+</span>
        </div>
        <div class="faq-answer">
            ${faq.answer}
        </div>
    `;
    faqContainer.appendChild(faqItem);
});

// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
        const toggle = question.querySelector('.toggle');
        toggle.textContent = faqItem.classList.contains('active') ? '-' : '+';
    });
});

// Form validation
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(registrationForm);
    // Here you would typically send the form data to a server
    alert('¡Registro completado con éxito! Te hemos enviado un correo de confirmación.');
    registrationForm.reset();
});


const speakers2 = document.querySelectorAll('.speaker2');
const displayArea2 = document.getElementById('displayArea2');
const displayImage2 = document.getElementById('displayImage2');
const displayName2 = document.getElementById('displayName2');

speakers2.forEach(speaker => {
  speaker.addEventListener('click', () => {
    const name = speaker.getAttribute('data-name');
    const img = speaker.getAttribute('data-img');

    displayImage2.src = img;
    displayName2.textContent = name;
    displayArea2.classList.add('active');
  });
});