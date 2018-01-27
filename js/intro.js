// HAKUPALKKI
var url = document.getElementById('url');
// SELAIN
var browser = document.getElementById('browser');
// INTRO CONTAINER
var intro = document.getElementById('intro');
// FORM
var form = document.getElementById('form');
// PUZZLE SOLVED
var solved = document.getElementById('solved')

// CLICK BROWSER TO FOCUS URL
// browser.onclick = function() {url.focus();};

// Increases size of the text and the browser when url is clicked
url.onfocus = function() {
   browser.setAttribute("style", "width: 86%; margin: 0 7% 0 7%;");
   url.setAttribute("style", "font-size: 16px; top:15.5%; margin: 0 0 0 21%;");
};
//Normalize sizes when clicked outside the url
url.onblur = function() {
      browser.setAttribute("style", "width: 80%; margin: 0 10% 0 10%;");
      url.setAttribute("style", "font-size: 14px; top: 22%;");
};

// PUZZLE SETTINGS
browser.onclick = function() {
   puzzlePic.setAttribute("style","display: block;");
   $('#puzzlePic').snapPuzzle({
      rows: 5,
      columns: 5,
      containment: '.puzzle',
      pile: '.puzzle',
      onComplete: function(){
         $('#puzzlePic').fadeOut(150).fadeIn();
         solved.setAttribute("style", "display: block;");
      }
   });
};
