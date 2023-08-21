const touchElement = document.querySelector('.touch-element');

touchElement.addEventListener('touchstart', event => {
  event.preventDefault();
  touchElement.style.backgroundColor = 'red';
  console.log('Touch Started:', event);
});

touchElement.addEventListener('touchend', event => {
  event.preventDefault();
  touchElement.style.backgroundColor = 'blue';
  console.log('Touch Ended:', event);
});

touchElement.addEventListener('touchmove', event => {
  event.preventDefault();
  console.log('Touch Moved:', event);
});

touchElement.addEventListener('touchcancel', event => {
  event.preventDefault();
  touchElement.style.backgroundColor = 'blue';
  console.log('Touch Cancelled:', event);
});
