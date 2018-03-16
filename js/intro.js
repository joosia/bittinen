var overlayContainer = $("#overlay-container");
var overlay = $("#overlay");
var overlayText = $("#overlay-text");
var overlayBtn = $("#overlay-btn>a");
var overlayTexts = {
	factory: "<p>Internetissä data kulkee lukuisten reitittimien kautta, jotka nimensä mukaisesti ohjaavat liikennettä.</p>",
	underwater: "<p>Liikenne kulkee myös merten pohjassa kestävien kaapeleiden sisällä.</p>",

}
$(document).ready(function () {

	/*–––––––––––––––––––––––––––*/
	/*––––– Global Scripts  –––––*/
	/*–––––––––––––––––––––––––––*/

	overlayBtn.on("click", function () {

		switch ($(this).attr("href")) {

			case "#intro":
				console.log("intro");
				toggleOverlay();
				break;

			case "#third":
				toggleOverlay(); // hide
				console.log("underwater");
				window.setTimeout(toggleOverlay, 2000); // show
				$("body").append('<script src="animations/underwaterAnimation.js"></script>');
				underwaterAnimation();
				$("#animateScript").remove();
				$("#factory-animation").remove();
				window.setTimeout(function () {
					overlayBtn.attr("href", "#fourth");
					overlayText.html(overlayTexts.underwater);
				}, 700)
				break;

			case "#fourth":
				toggleOverlay(); //hide
				break;

			default:
			toggleOverlay();
				break;

		}
	});

	// Animate scroll to anchor-link
	$('a').on("click", function () { // select all anchors
		$('html, body').animate({ // select html and body for animating
			scrollTop: $($(this).attr('href')).offset().top // scroll to anchor-link href
		}, 800);
		return false;
	});


	/*–––––––––––––––––––*/
	/*––––– Intro   –––––*/
	/*–––––––––––––––––––*/

	var form = $("#form");
	var url = $("#url");
	var scale = $("#scale");

	// Remove logo after animation is done and show overlay
	window.setTimeout(function () {
		$("#logo").remove();
		toggleOverlay();
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
			window.setTimeout(toggleOverlay, 2000);
			// Animate scroll to #first
			$('html, body').animate({
				scrollTop: $($(first)).offset().top
			}, 800);
			factoryAnimation() // Run factory animation
			overlayText.html(overlayTexts.factory);
			overlayBtn.text("Jatka");
			overlayBtn.attr("href", "#third"); // Switch href
			form.remove();
		}
	});

}); // $(document).ready(function(){});

// Toggle overlay visibility
function toggleOverlay() {
	overlayContainer.fadeToggle("normal", function () {
		// Prevent overlay hide on click. The overlay can only
		// be closed by clicking container area or overlay-btn
		// overlay.click(function (e) {
		// 	e.stopPropagation()
		// });
		// $(this).click(function () {
		// 	toggleOverlay()
		// });
	})
}