const flipContainer = document.querySelector('.flip-container');
const flipInnerContainer = document.querySelector('.flip-inner-container');

let isFlipped = false;
let rotationInterval;

// Rotate the card automatically every 2 seconds
rotationInterval = setInterval(() => {
  flipInnerContainer.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
  isFlipped = !isFlipped;
}, 2000);

// Add event listener to rotate the card on click
flipContainer.addEventListener('click', () => {
  flipInnerContainer.style.transform = flipInnerContainer.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});

// Pause rotation on hover
flipContainer.addEventListener('mouseenter', () => {
  clearInterval(rotationInterval);
});

// Resume rotation on mouse leave
flipContainer.addEventListener('mouseleave', () => {
  rotationInterval = setInterval(() => {
    flipInnerContainer.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
    isFlipped = !isFlipped;
  }, 2000);
});





const waterContainer = document.getElementById('water');

function createDrop() {
  const drop = document.createElement('div');
  drop.classList.add('drop');
  drop.style.setProperty('--x', `${Math.random() * 100}vw`);
  drop.style.setProperty('--y', `${Math.random() * 100}vh`);
  drop.style.width = `${Math.random() * 4 + 2}rem`;
  drop.style.height = drop.style.width;

  // Generate random color
  const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  drop.style.backgroundColor = randomColor;

  waterContainer.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 5000);
}

setInterval(createDrop, 100);