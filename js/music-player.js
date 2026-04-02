class MusicPlayer {
  constructor(tracks, containerId = 'music-player') {
    this.tracks = tracks;
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.audio = new Audio();
    this.container = document.getElementById(containerId);

    this.setupEventListeners();
    this.renderPlayer();
    this.loadTrack(0);
  }

  setupEventListeners() {
    this.audio.addEventListener('ended', () => this.nextTrack());
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
  }

  renderPlayer() {
    const playerHTML = `
      <div class="player-container">
        <div class="player-now-playing">
          <div class="now-playing-info">
            <div class="now-playing-title">Now Playing</div>
            <div class="now-playing-track" id="now-playing-track">${this.tracks[0].song}</div>
          </div>
        </div>

        <div class="player-progress">
          <div class="time-display" id="current-time">0:00</div>
          <div class="progress-bar-container">
            <input
              type="range"
              id="progress-bar"
              class="progress-bar"
              min="0"
              max="100"
              value="0"
            >
          </div>
          <div class="time-display" id="duration-time">0:00</div>
        </div>

        <div class="player-controls">
          <button id="prev-btn" class="control-btn prev-btn" title="Previous Track">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
            </svg>
          </button>

          <button id="play-btn" class="control-btn play-btn" title="Play/Pause">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path class="play-icon" d="M8 5v14l11-7z"/>
              <path class="pause-icon" style="display:none" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          </button>

          <button id="next-btn" class="control-btn next-btn" title="Next Track">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 18h2V6h-2zm-11-7l8.5-6v12z"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    this.container.innerHTML = playerHTML;
    this.attachControlListeners();
  }

  attachControlListeners() {
    document.getElementById('play-btn').addEventListener('click', () => this.togglePlay());
    document.getElementById('next-btn').addEventListener('click', () => this.nextTrack());
    document.getElementById('prev-btn').addEventListener('click', () => this.previousTrack());
    document.getElementById('progress-bar').addEventListener('change', (e) => {
      this.audio.currentTime = (e.target.value / 100) * this.audio.duration;
    });
  }

  loadTrack(index) {
    if (index < 0) index = this.tracks.length - 1;
    if (index >= this.tracks.length) index = 0;

    this.currentTrackIndex = index;
    const track = this.tracks[index];

    this.audio.src = track.trackURL;
    this.updateNowPlaying();

    if (this.isPlaying) {
      this.audio.play();
    }
  }

  updateNowPlaying() {
    const track = this.tracks[this.currentTrackIndex];
    document.getElementById('now-playing-track').textContent = track.song;
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
    this.updatePlayButton();
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updatePlayButton();
  }

  nextTrack() {
    this.loadTrack(this.currentTrackIndex + 1);
  }

  previousTrack() {
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
    } else {
      this.loadTrack(this.currentTrackIndex - 1);
    }
  }

  updatePlayButton() {
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    if (this.isPlaying) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    }
  }

  updateProgress() {
    const progress = (this.audio.currentTime / this.audio.duration) * 100;
    document.getElementById('progress-bar').value = progress || 0;
    this.updateTimeDisplay();
  }

  updateTimeDisplay() {
    const current = this.formatTime(this.audio.currentTime);
    document.getElementById('current-time').textContent = current;
  }

  updateDuration() {
    const duration = this.formatTime(this.audio.duration);
    document.getElementById('duration-time').textContent = duration;
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
}
