var puzzle = {}
puzzle.pieces = [];
puzzle.numOfPieces = 20;
puzzle.draggable = ".piece";
puzzle.droppable = ".slot";

// Creates slots for puzzle pieces
puzzle.createSlots = function (numOfPieces) {
   for (var i = 0; i < numOfPieces; i++) {
      var str = '<div class="slot" data-index="' + i + '"></div>';
      $("#slotsContainer").append(str);
   }
};

// Adds puzzle pieces
puzzle.addPieces = function (numOfPieces) {
   // build <img> string
   for (var i = 0; i < numOfPieces; i++) {
      var str = '<img src="pieces/p' + i + '.gif" class="piece" data-index="' + i + '"></div>';
      // push to array
      puzzle.pieces.push(str);
   }
   while (puzzle.pieces.length > 0) {
         var rndIndex = Math.floor(Math.random() * puzzle.pieces.length);
         $("#piecesContainer").append(puzzle.pieces[rndIndex]);
         // Remove the piece from array
         puzzle.pieces.splice(rndIndex, 1);
   }
};

// Removes element from dom
puzzle.remove = function () { $(this).remove();};

// Show overlay on complete
puzzle.onComplete = function () {
   $("#overlay").toggle("slow");
};

$(document).ready(function() {
   puzzle.createSlots(puzzle.numOfPieces);
   puzzle.addPieces(puzzle.numOfPieces);

   // Make .draggable elements draggable and stackable
   $(puzzle.draggable).draggable({stack:"img"});

   // Add droppable target
   $(puzzle.droppable).droppable({
      accept: function(piece) {
         var dragIndex, dropIndex;

         dropIndex = $(piece).attr("data-index")
         dragIndex = $(this).attr("data-index")
         // if the data-index matches accept drop
         return dropIndex == dragIndex;
      },
      hoverClass : "slot-hover",
      drop: function(event, ui) {
         $(ui.draggable).fadeTo("slow", 0.0),
         $(this).fadeTo("slow", 0.0, function(){
            $(this).css({"visibility" : "hidden"});
         });
      }
   });
}); // document ready
