$(document).ready(function () {

	/*–––––––––––––––––––*/
	/*––––– Intro   –––––*/
	/*–––––––––––––––––––*/
	var browser = $("#browser");
	var form = $("#form");
	var url = $("#url");
	var scale = $("#scale");

	// Remove logo from dom after animation is done
	function removeLogo() {
		var timeoutID;
		timeoutID = window.setTimeout(function(){
				$("#logo").remove();
		}, 5000);
	};
	removeLogo();

	// Scale up browser container
	form.click(function(){
		url.focus();
	})
	url.on({
		focus: function() {
			scale.addClass("scale-up");
		},
		blur: function() {
			scale.removeClass("scale-up");
		}
	});

	// Function on url-submit
	form.submit(function () {
		// Add first animation
		$("#first").append('<iframe id="animation1" src="animations/animation1.html" frameborder="none"></iframe>');
		// Animate scroll to #first
		$('html, body').animate({
			scrollTop: $($(this).attr('action')).offset().top
		}, 700);
	});

	/*––––––––––––––––––*/
	/*––––– Puzzle –––––*/
	/*––––––––––––––––––*/
	// url.off();
	$("#startPuzzle").click(function(){
		$("#puzzleImg").css("display", "block");
		$("#slotsContainer").css("display", "block");
		$("#piecesContainer").css("display", "block");
	});
	var puzzle = {}
	puzzle.pieces = [];
	puzzle.numOfPieces = 20;
	puzzle.draggable = ".piece";
	puzzle.droppable = ".slot";

	// Creates slots for puzzle pieces
	puzzle.createSlots = function (numOfPieces) {
		$("#slotsContainer").css("height", $("#puzzleImg").height() + 1);
		for (var i = 0; i < numOfPieces; i++) {
			var str = '<div class="slot" data-index="' + i + '"></div>';
			$("#slotsContainer").append(str);
		}
	};

	// Adds puzzle pieces
	puzzle.addPieces = function (numOfPieces) {
		// build <img> string
		for (var i = 0; i < numOfPieces; i++) {
			var str = '<img src="img/pieces/p' + i + '.gif" class="piece" data-index="' + i + '"></div>';
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
	puzzle.remove = function () { $(this).remove(); };

	// Show overlay on complete
	puzzle.onComplete = function () {
		$("#overlay").toggle("slow");
	};
	puzzle.createSlots(puzzle.numOfPieces);
	puzzle.addPieces(puzzle.numOfPieces);

	// Make .draggable elements draggable and stackable
	$(puzzle.draggable).draggable({ stack: "img" });

	// Add droppable target
	$(puzzle.droppable).droppable({
		accept: function (piece) {
			var dragIndex, dropIndex;

			dropIndex = $(piece).attr("data-index")
			dragIndex = $(this).attr("data-index")
			// if the data-index matches accept drop
			return dropIndex == dragIndex;
		},
		hoverClass: "slot-hover",
		drop: function (event, ui) {
			$(ui.draggable).fadeTo("slow", 0.0),
				$(this).fadeTo("slow", 0.0, function () {
					$(this).css({ "visibility": "hidden" });
				});
		}
	});


	/*––––––––––––––––––*/
	/*––––– Other  –––––*/
	/*––––––––––––––––––*/
	// jQuery: Smooth Scroll on click (link-elements)
	$('a').on("click", function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 700);
		return false;
	});
	
	// Smooth Scroll on arrow keys
	$(document).keydown(function (event) {
		switch (event.which) {
			case 38: // Arrow Up
				$("html, body").animate({
					scrollTop: "-=738",
				}, 700);
				break;
			case 40: // Arrow Down
				$("html, body").animate({
					scrollTop: "+=738",
				}, 700);
				break;
			default: return; // Exit this handler for other keys
		}
		event.preventDefault();
	});

}); // $(document).ready(function(){});
