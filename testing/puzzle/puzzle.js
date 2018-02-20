$(document).ready(function() {

   $("body").click(function(){
      $("#overlay").toggle("slow");
   })

   // Make .draggable elements draggable and stackable
   $(".draggable").draggable({stack:"img"});

   // Add droppable target
   $('.puzzleImg img[data-index]').droppable({

      accept: function(piece) {
         var dragIndex, dropIndex;

         dropIndex = $(piece).attr("data-index")
         dragIndex = $(this).attr("data-index")
         // if the data-index matches accept drop
         return dropIndex == dragIndex;
      },
      hoverClass : "drop-hover",
      drop: function(event, ui) {
         $(ui.draggable).fadeTo("slow", 0.0);
         $(this).css("filter","grayscale(0)");
      }
   });

   // Remove element
   function removeEl() {
      $(this).remove();
   }

   $(".slot").css("display", "none");

   //
   // if( $(".pieces").has("img") ) {
   // }
   // else {
   //   $("#overlay").toggle("slow");
   // }

}); // document ready
