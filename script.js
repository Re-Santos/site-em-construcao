const img = document.createElement('./img/hero-desktop.jpg');

img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
var src = document.createElement('source');
src.innerHTML = 'Hello World';
document.body.appendChild(img);
document.body.appendChild(src);