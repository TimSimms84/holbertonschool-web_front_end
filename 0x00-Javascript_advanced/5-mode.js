/*Create a function named changeMode:

It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
Write a function named main:

Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
Add a paragraph to the body of the page with the text Welcome Holberton!
Add a button to the body with the text Spooky
Add a button to the body with the text Dark mode
Add a button to the body with the text Scream mode
When clicking on each button, the page CSS should change to the different themes you created previously
Call the main function*/

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

  document.body.innerHTML += 'Welcome Holberton!<br>';
  document.body.innerHTML += '<button onclick="spooky()">Spooky</button>';
  document.body.innerHTML += '<button onclick=darkMode()>Dark mode</button>';
  document.body.innerHTML += '<button onclick=screamMode()>Scream mode</button>';
}

main();
