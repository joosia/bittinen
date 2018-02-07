$(document).ready(function() {

  // Click browser to focus URL-bar
  $("#browser").click(function(){
     $(".url").focus();
   });

  // Enlarge browser & text on focus & the opposite on blur
  $(".url").on("focus blur", function(){
    $(".browserContainer").toggleClass("bcLarge");
    $(this).toggleClass("urlLarge ");
  });

  // jQuery: Smooth Scroll on click (link-elements)
  var $root = $('html, body'); // cache for better performance?
  $('a').on("click", function() {
     $('html, body').animate( {
        scrollTop:$($(this).attr('href')).offset().top
     },700);
     return false;
  });

  // // Returns height of browser viewport
  // var h = $( window ).height();
  // console.log(h);

  // Smooth Scroll on arrow keys
  $(document).keydown(function(event) {
    switch (event.which) {
      case 38: // Arrow Up
        $("html, body").animate({
          scrollTop: "-=738",
        }, 700);

        break;
      case 40: //case 13: // Arrow Down
        $("html, body").animate({
          scrollTop: "+=738",
        }, 700);
        break;
      default: return; // Exit this handler for other keys
    }
    event.preventDefault();
  });

  // Function on url-sbumit
  $("#form").submit(function(){
    $('html, body').animate( {
       scrollTop:$($(this).attr('action')).offset().top
    },700);
    $(".hakaset").css("animation-play-state","running");
    $("#paketti").css("display","block").addClass("drop");
  });

  // Start the puzzle
  $("#startPuzzle").click(function(){
    // Show the puzzle picture
    $("#puzzlePic").css("display","block");
    // Prevents scrolling
    // $("body").css("overflow","hidden"); // Disables page scroll
    $(".browserContainer").css("top","15%");
    // Puzzle Settings
    $("#puzzlePic").snapPuzzle({
      rows: 5,
      columns: 5,
      containment: '#intro',
      pile: '.pile',
      onComplete: function(){
        $("#puzzlePic").fadeOut(150).fadeIn();
        $("#solved.css").css("display","block");
       }
    });
  });

});

//CANVAS
// window.onload = function() {
//     var canvas = document.getElementById("canvas"),
//         context = canvas.getContext('2d'),
//         tausta = document.getElementById("tausta"),
//         liukuhihna = document.getElementById("liukuhihna"),
//         hakaset = document.getElementById("hakaset"),
//         width = window.innerWidth,
//         height = window.innerHeight;
//         // console.log(width, height);
//
//     canvas.setAttribute("width", width);
//     canvas.setAttribute("height", height);
//
//     context.drawImage(tausta, 0, 0, width, height);
//
//     context.drawImage(hakaset, 200, 525);
//     context.drawImage(liukuhihna, 160, 440);
//
//       var interval = setInterval(function() {
//         var x = 200, y = 460;
//
//         return function () {
//           // x1, y1, width, height
//           context.clearRect(200, 460, 725, 20);
//           context.drawImage(hakaset, x, y);
//
//           x += 1;
//           if (x > 250) {
//             x = 200;
//           }
//         };
//       }(), 600/40);
//
//
//
//   };
