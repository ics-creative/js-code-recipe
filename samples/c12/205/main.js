const myCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

myCircle.setAttribute('cx', '100');
myCircle.setAttribute('cy', '100');
myCircle.setAttribute('r', '100');
myCircle.setAttribute('fill', '#FFFF8D');

const mySvg = document.querySelector('#mySvg');
mySvg.appendChild(myCircle);
