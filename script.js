const allKeys = document.querySelectorAll(".key");
const sounds = [{ letter: "A", soundSrc: "assets/sounds/clap.wav" }];

function playAudio(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
}

function enableVisualEffect(key) {
  const element = document.querySelector(`div[data-key="${key}"`);
  if (!element) return;

  element.classList.add("playing");
}

function disableVisualEffect(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("playing");
}

window.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();

  playAudio(key);
  enableVisualEffect(key);
});

window.addEventListener("touchstart", (e) => {
  const key =
    e.target.parentElement.dataset.key?.toUpperCase() ||
    e.target.dataset.key?.toUpperCase();

  playAudio(key);
  enableVisualEffect(key);
});

allKeys &&
  allKeys.forEach((key) =>
    key.addEventListener("transitionend", disableVisualEffect)
  );
