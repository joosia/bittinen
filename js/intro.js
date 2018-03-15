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

	//window.setTimeout(toggleOverlay, 5000);

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
	$("input").on("keypress", function(e){
		if (e.which === 13) {
			url.blur();
			// Add first animation
			factoryAnimation()
			overlayContainer.style.visibility = "visible";
			overlayContainer.style.opacity = "1";
			overlay.innerHTML = "<h1>Melkein valmista...</h1><p>Koska nettisivut sisältävät paljon dataa, ne koostuvat useista paketeista yhden sijaan. Kokeile saatko palat paikoilleen ja sivun näkymään oikein!</p></br><div id='overlay-btn'>Jatka</div>";
			// Animate scroll to #first
			$('html, body').animate({
				scrollTop: $($(first)).offset().top
			}, 700);
			form.remove();

		}
	});



	/*––––––––––––––––––*/
	/*––––– Other  –––––*/
	/*––––––––––––––––––*/
	$('a').on("click", function () { // jQuery: Smooth Scroll to anchor-link
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 700);
		return false;
	});
	
	$("#overlay-btn").on("click", function(){
		toggleOverlay();
	});


	// $(document).keydown(function (event) { 	// jQuery: Smooth Scroll on arrow keys
	// 	switch (event.which) {
	// 		case 38: // Arrow Up
	// 			$("html, body").animate({
	// 				scrollTop: "-=738",
	// 			}, 700);
	// 			break;
	// 		case 40: // Arrow Down
	// 			$("html, body").animate({
	// 				scrollTop: "+=738",
	// 			}, 700);
	// 			break;
	// 		default: return; // Exit this handler for other keys
	// 	}
	// 	event.preventDefault();
	// });
}); // $(document).ready(function(){});


var overlay = document.querySelector("#overlay");
var overlayContainer = document.querySelector("#overlay-container");
function toggleOverlay() {
	if (overlayContainer.style.opacity == 0) {
		overlayContainer.style.opacity = "1";
		overlayContainer.style.visibility = "visible";
	} else {
		overlayContainer.style.opacity = "0";
		overlayContainer.style.visibility = "hidden";
	}
}