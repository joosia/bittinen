// HAKUPALKKI
var url = document.getElementById('url');

// SELAIN
var browser = document.getElementById('browser');

// INTRO CONTAINER
var intro = document.getElementById('intro');

var form = document.getElementById('form');

var solved = document.getElementById('solved')

// CLICK BROWSER TO FOCUS URL
// browser.onclick = function() {url.focus();};

url.onfocus = function() {
   browser.setAttribute("style", "width: 86%; margin: 0 7% 0 7%;");
   url.setAttribute("style", "font-size: 16px; top:15.5%; margin: 0 0 0 21%;");
};

url.onblur = function() {
      browser.setAttribute("style", "width: 80%; margin: 0 10% 0 10%;");
      url.setAttribute("style", "font-size: 14px; top: 22%;");
};

browser.onclick = function() {
   puzzlePic.setAttribute("style","display: block;");
   $('#puzzlePic').snapPuzzle({
      rows: 3,
      columns: 3,
      containment: '.puzzle',
      pile: '.puzzle',
      onComplete: function(){
         $('#puzzlePic').fadeOut(150).fadeIn();
         solved.setAttribute("style", "display: block;");
      }
   });
};
