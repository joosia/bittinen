var root = $('html, body'); 

/*–––––––––––––––––––––––––––––*/
/*––––– Overlay Settings  –––––*/
/*–––––––––––––––––––––––––––––*/
var overlay = {}
overlay.container = $("#overlay-container");
overlay.content = $("#overlay-text-content");
overlay.btn = $("#overlay-btn");
overlay.link = $("#btn-link");
overlay.html = {
	factory: "<p>Internetissä data kulkee lukuisten reitittimien kautta, jotka nimensä mukaisesti ohjaavat liikennettä.</p>",
	dns:"", // dns screen
	traffic:"", // traffic control screen
	underwater: "<p>Liikenne kulkee myös merten pohjassa kestävien kaapeleiden sisällä.</p>",
	server:"<h1>Perillä ollaan!</h1><p>Nettisivut sijaitsevat yhdellä tai useammalle palvelinkoneella.</p>",
	puzzle: "<h1>Melkein valmista...</h1><p>Koska nettisivut sisältävät paljon dataa, ne koostuvat useista paketeista yhden sijaan. Kokeile saatko palat paikoilleen ja sivun näkymään oikein!</p>",
	puzzleComplete: "<h1>Mahtavaa! Sait palat paikoilleen.</h1><p>Nyt pakettimme on suorittanut tehtävänsä ja sivu on latautunut. Todellisuudessa kaikki tämä tapahtuu lähes silmänräpäyksessä. Ihmeellistä, eikö vain?</p> <img src='images/paketti.png' class='packet'/>",
}
overlay.show = function(){
	// Add delay if not on intro or puzzle screen
	if (overlay.link.attr("href") == "#intro" || overlay.link.attr("href") == "#puzzleComplete") {
		overlay.container.fadeIn("normal");
	} else {
		setTimeout(function(){
			switch (overlay.link.attr("href")) {
				case "#factory":
					$("#intro").attr("id", "puzzle"); // Change the id for later use
					overlay.container.css("background", "none"); // remove overlay shadow
					overlay.content.html(overlay.html.factory);
					overlay.link.text("Jatka");
					break;
				case "#second":
					overlay.content.html(overlay.html.second);
					break;
				case "#underwater":
					overlay.content.html(overlay.html.underwater);
					break;
				case "#server":
					overlay.content.html(overlay.html.server);
					$("script[src='animations/underwaterAnimation.js']").remove();
					$("#underwater-animation").remove();
					$("script[src='js/create.js']").remove();
					$("#factory-animation").remove();
					$("script[src='animations/factoryAnimation.js']").remove();
					break;
				case "#puzzle":
					overlay.container.css("background", "rgba(0, 0, 0, 0.3)");
					overlay.content.html(overlay.html.puzzle);
					root.css("overflow", "hidden"); // disable page scroll
					break;
				case "#puzzleComplete":
					overlay.content.html(overlay.html.puzzleComplete);
					root.css("overflow", "auto"); // enable scroll
					break;
				default:
					break;
			}
			overlay.container.fadeIn("normal");
		}, 1500);
	}
	// Start underwater animation
	if (overlay.link.attr("href") == "#underwater" ){
		underwaterAnimation();
	}
}

function animateScroll() {
	root.animate({	// select html and body for animating
		scrollTop: $($(overlay.link).attr('href')).offset().top // scroll to anchor-link href
	}, 1000);
	return false;
}
// Clear animations
function clearAnimation() {
	stage.removeAllChildren();
	stage.update();
}

$(document).ready(function () {

	/*–––––––––––––––––––––––––––*/
	/*––––– Global Scripts  –––––*/
	/*–––––––––––––––––––––––––––*/

	/* Overlay button */
	overlay.btn.on("click", function (e) {
		e.preventDefault();
		overlay.container.fadeOut("fast");
		switch (overlay.link.attr("href")) {
			case "#factory":
				clearAnimation(); // Clear animation for better performance
				// Add underwater animation script
				$("body").append('<script src="animations/underwaterAnimation.js"></script>');
				overlay.link.attr("href", "#underwater");
				animateScroll();
				overlay.show();
				break;
			case "#underwater":
				clearAnimation();
				overlay.link.attr("href", "#server");
				animateScroll();
				overlay.show();
				break;
			case "#server":
				overlay.link.attr("href", "#puzzle"); // switch href
				animateScroll();
				overlay.show();
				puzzle.init(); // Start puzzle
				break;
			case "#puzzle":
				overlay.link.attr("href", "#puzzleComplete");
				break;
			case "#puzzleComplete":
				break;
			default:
				break;
		}
	});


	/*–––––––––––––––––––*/
	/*––––– Intro   –––––*/
	/*–––––––––––––––––––*/

	var form = $("#form");
	var url = $("#url");
	var scale = $("#scale");

	// Remove logo after animation is done and show overlay
	setTimeout(function () {
		$("#logo").remove();
		//toggleOverlay();
		overlay.show();
	}, 4000);
	// Scale up browser container
	form.click(function () {
		url.focus();
	})
	url.on({
		focus: function () {
			scale.addClass("scale-up");
		},
		blur: function () {
			scale.removeClass("scale-up");
		}
	});
	// Function on url-submit
	$("input").on("keypress", function (e) {
		if (e.which === 13) {
			url.blur();
			overlay.link.attr("href", "#factory"); // switch href
			factoryAnimation() // Run factory animation
			// Animate scroll to #factory
			animateScroll();
			overlay.show();
			form.remove();
		}
	});

}); // $(document).ready(function(){});