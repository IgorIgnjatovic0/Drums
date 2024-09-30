let leftDrum = document.querySelector('#crash-ride');
let rightDrum = document.querySelector('#hihat-top');

window.addEventListener('keydown', (event) => {
  let key = event.keyCode;
  let our_key = document.querySelector(`div[data-key="${key}"]`);

  if (!our_key) return;

  let audio = document.querySelector(`audio[data-key="${key}"]`);
  audio.currentTime = 0;
  audio.play();

  switch (key) {
    case 69:
    case 82:
      animateLeftDrum();
      break;
    case 73:
    case 75:
      animateRightDrum();
      break;
  }
  our_key.classList.add('playing');
});

const animateLeftDrum = () => {
  leftDrum.style.transform = 'rotate(3.5deg) scale(1.5)';
}

const animateRightDrum = () => {
  rightDrum.style.top = '187px';
}

const removeALD = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
}

const removeADD = (e) => {
  if (e.propertyName !== 'top') return;
  e.target.style.top = '166px';
}

const removeKeyTransition = (e) => {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

let all_keys = document.querySelectorAll('.key');

leftDrum.addEventListener('transitionend', removeALD);
rightDrum.addEventListener('transitionend', removeADD);

all_keys.forEach((key) => {
  key.addEventListener('transitionend', removeKeyTransition);
});
