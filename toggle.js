function toggleCSS() {
  var cssFile = document.getElementById('cssFile');
  if (cssFile.getAttribute('href') == 'main.css') {
    cssFile.setAttribute('href', 'alternate.css');
  } else {
    cssFile.setAttribute('href', 'main.css');
  }
}
function playClicksound() {
    var clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play();
  }