document.addEventListener('DOMContentLoaded', async () => {
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
      <div class="faq-answer" style="display: none;">
        ${faq.answer}
      </div>
    `;
    faqContainer.appendChild(faqItem);
  });

  // Opcional: interacción para expandir/colapsar respuestas
  faqContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('faq-question')) {
      const answer = e.target.nextElementSibling;
      answer.style.display = (answer.style.display === 'none') ? 'block' : 'none';
    }
  });

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
        const toggle = question.querySelector('.toggle');
        toggle.textContent = faqItem.classList.contains('active') ? '-' : '+';
    });
});
});
