/* */

function changeMode(size, weight, transform, background, color) {
  document.body.style.fontSize = size;
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.backgroundColor = background;
  document.body.style.color = color;
}


function main() {
  globalThis.spooky = () => changeMode('9', 'bold', 'uppercase', 'pink', 'green');
  globalThis.darkMode = () => changeMode('12', 'bold', 'capitalize', 'black', 'white');
  globalThis.screamMode = () => changeMode('12', 'normal', 'lowercase', 'white', 'black');

  document.body.innerHTML += 'Welcome Holberton!';
  document.body.innerHTML += '<button onclick="spooky()">Spooky</button>';
  document.body.innerHTML += '<button onclick=darkMode()>Dark mode</button>';
  document.body.innerHTML += '<button onclick=screamMode()>Scream mode</button>';
}

main();
