import Goblin from './goblin/goblin';

document.addEventListener('DOMContentLoaded', () => {
  const goblin = new Goblin(document.querySelector('.cell'), document.querySelector('.box'));
  window.goblin = goblin;

  const popInterval = setInterval(() => {
    const cellContainer = document.querySelectorAll('.cell');
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    const number = randomNumber(0, cellContainer.length - 1);
    window.goblin.addNewGoblin(number);
    if (!cellContainer.length) clearInterval(popInterval);
  }, 1000);
});
