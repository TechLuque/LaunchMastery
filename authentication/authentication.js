// Form validation
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(registrationForm);
    // Here you would typically send the form data to a server
    alert('¡Registro completado con éxito! Te hemos enviado un correo de confirmación.');
    registrationForm.reset();
});