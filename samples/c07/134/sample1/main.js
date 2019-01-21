const character = document.querySelector('.character');

character.addEventListener('dragstart', () => {
  console.log('dragstartイベント');
});

character.addEventListener('drag', () => {
  console.log('dragイベント');
});

character.addEventListener('dragend', () => {
  console.log('dragendイベント');
});
