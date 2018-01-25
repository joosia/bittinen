// HAKUPALKKI
var url = document.getElementById('url');

// SELAIN
var browser = document.getElementById('browser');

// INTRO CONTAINER
var intro = document.getElementById('intro');

// CLICK BROWSER TO FOCUS URL
// browser.onclick = function() {url.focus();};

url.onfocus = function() {
   browser.setAttribute("style", "width: 85%;");
   url.setAttribute("style", "font-size: 16px;top: 5px; width: 58%;");
};

url.onblur = function() {
      browser.setAttribute("style", "width: 80%;");
      url.setAttribute("style", "font-size: 14px;");
};
