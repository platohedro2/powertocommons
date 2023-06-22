const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const volumeSlider = document.getElementById('volume-slider');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const downloadBtn = document.getElementById('download-btn');
let isDraggingProgress = false;

playBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

pauseBtn.addEventListener('click', function() {
  audio.pause();
});

volumeSlider.addEventListener('input', function() {
  audio.volume = volumeSlider.value;
});

progress.addEventListener('mousedown', function(e) {
  isDraggingProgress = true;
  updateProgressBar(e);
});

progress.addEventListener('mousemove', function(e) {
  if (isDraggingProgress) {
    updateProgressBar(e);
  }
});

progress.addEventListener('mouseup', function() {
  isDraggingProgress = false;
});

progress.addEventListener('mouseleave', function() {
  isDraggingProgress = false;
});

audio.addEventListener('timeupdate', function() {
  if (!isDraggingProgress) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  currentTime.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;

  const durationMinutes = Math.floor(audio.duration / 60);
  const durationSeconds = Math.floor(audio.duration % 60);
  duration.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
});

function updateProgressBar(e) {
  const progressWidth = progress.offsetWidth;
  const clickX = e.offsetX;
  const progressPercent = (clickX / progressWidth) * 100;
  audio.currentTime = (audio.duration / 100) * progressPercent;
}

const volumeSliderContainer = document.getElementById('volume-slider-container');
volumeSlider.setAttribute('type', 'range');
volumeSlider.setAttribute('min', '0');
volumeSlider.setAttribute('max', '1');
volumeSlider.setAttribute('step', '0.1');
volumeSlider.setAttribute('value', '1');

volumeSliderContainer.appendChild(volumeSlider);