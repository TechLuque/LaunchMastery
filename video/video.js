
const video = document.getElementById('miVideo');

video.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false; // Activa el audio
  } else {
    video.muted = true;  // Opcional: vuelve a silenciar si se da otro clic
  }
});