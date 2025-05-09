// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


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



const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
  const highlightContainer = document.querySelector('.highlight-container');
  const highlightImage = highlightContainer.querySelector('.highlight-img');
  const highlightName = highlightContainer.querySelector('.highlight-name');

  let activeIndex = -1;
  let hideTimeoutId = null;

  function showHighlight(index) {
    if (activeIndex === index) {
      // clicking same thumbnail toggles off highlight
      hideHighlight();
      return;
    }
    activeIndex = index;
    const selectedThumb = thumbnails[index];
    const imgSrc = selectedThumb.querySelector('img').src;
    const altText = selectedThumb.querySelector('img').alt;
    const nameText = selectedThumb.querySelector('.thumbnail-name').textContent;

    highlightImage.src = imgSrc;
    highlightImage.alt = altText;
    highlightName.textContent = nameText;

    highlightContainer.classList.add('visible');

    thumbnails.forEach((thumb, i) => {
      if(i === activeIndex) {
        thumb.classList.add('selected');
        thumb.setAttribute('aria-pressed', 'true');
      } else {
        thumb.classList.remove('selected');
        thumb.setAttribute('aria-pressed', 'false');
      }
    });

    resetHideTimer();
  }

  function hideHighlight() {
    activeIndex = -1;
    highlightContainer.classList.remove('visible');
    thumbnails.forEach(thumb => {
      thumb.classList.remove('selected');
      thumb.setAttribute('aria-pressed', 'false');
    });
    clearHideTimer();
  }

  function resetHideTimer() {
    clearHideTimer();
    // Hide automatically after 30 seconds
    hideTimeoutId = setTimeout(() => {
      hideHighlight();
    }, 30000);
  }

  function clearHideTimer() {
    if (hideTimeoutId) {
      clearTimeout(hideTimeoutId);
      hideTimeoutId = null;
    }
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', (e) => {
      e.stopPropagation();
      showHighlight(index);
    });
    thumb.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showHighlight(index);
      }
    });
  });

  // Clicking outside closes highlight
  document.body.addEventListener('click', () => {
    hideHighlight();
  });
  highlightContainer.addEventListener('click', e => e.stopPropagation());

  // Initialize ARIA
  thumbnails.forEach(thumb => {
    thumb.setAttribute('aria-pressed', 'false');
  });


  const speakers = [
    {
      photo: '/JUANJO LMV.png',
      name: 'Nombre 1',
      title: 'CEO',
      bio: 'Este es el speaker 1. Aquí va su descripción épica, logros y lo que compartirá en el evento.'
    },
    {
      photo: '/JULIANA LMV.png',
      name: 'Nombre 2',
      title: 'Fundador de X',
      bio: 'Este speaker ha impactado miles de negocios digitales en LATAM.'
    },
    {
      photo: '/ALVARO LMV.png',
      name: 'Nombre 3',
      title: 'Mentor Internacional',
      bio: 'Conferencista global que ha entrenado a más de 20 mil emprendedores.'
    }
  ];

  let index = 0;

  function updateSpeaker() {
    const speaker = speakers[index];
    document.getElementById('photo').src = speaker.photo;
    document.getElementById('name').innerText = speaker.name;
    document.getElementById('title').innerText = speaker.title;
    document.getElementById('bio').innerText = speaker.bio;
  }

  function next() {
    index = (index + 1) % speakers.length;
    updateSpeaker();
  }

  function prev() {
    index = (index - 1 + speakers.length) % speakers.length;
    updateSpeaker();
  }

  setInterval(next, 10000); // Auto slide cada 10 segundos

  updateSpeaker(); // Inicializar



  // Animated

  
