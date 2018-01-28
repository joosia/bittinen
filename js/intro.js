var url = document.getElementById('url'); // URL-bar
var browser = document.getElementById('browser'); // Browser
var intro = document.getElementById('intro'); // Intro container
var form = document.getElementById('form'); // URL form
// Start puzzle element
var start = document.getElementById('startPuzzle')
// Puzzle solved element
var solved = document.getElementById('solved');

// Click browser to focus URL-bar
browser.onclick = function() {url.focus();};

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

// jQuery: Smooth Scroll on click (link-elements)
var $root = $('html, body'); // cache for better performance?
$('a').click(function() {
   $('html, body').animate( {
      scrollTop:$($(this).attr('href')).offset().top
   },700);
   return false;
});

//Scroll on arrow keys
window.addEventListener("keydown", function (event) {
   var h = window.innerHeight;
   if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
   }
   switch (event.key) {
      case "ArrowDown":
         scrollBy(0, h)
            break;
      case "ArrowUp":
         scrollBy(0, -h)
            break;
      // case "ArrowLeft":
      //   // Do something for "left arrow" key press.
      //   break;
      // case "ArrowRight":
      //   // Do something for "right arrow" key press.
      //   break;
      // case "Enter":
      //   // Do something for "enter" or "return" key press.
      //   break;
      // case "Escape":
      //   // Do something for "esc" key press.
      //    break;
    default:
      return; // Quit when this doesn't handle the key event.
   }
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

// jQuery: PUZZLE SETTINGS
start.onclick = function() {;
   browser.setAttribute("style", "padding-bottom:0%;");
   // intro.setAttribute("style", "max-height: 100%; overflow: auto;");
   puzzlePic.setAttribute("style","display: block;");
   $('#puzzlePic').snapPuzzle({
      rows: 5,
      columns: 5,
      containment: '.browser',
      pile: '.pile',
      onComplete: function(){
         $('#puzzlePic').fadeOut(150).fadeIn();
         intro.setAttribute("style", "height: 100%; overflow: hidden;");
         solved.setAttribute("style", "display: block;");
      }
   });
};
