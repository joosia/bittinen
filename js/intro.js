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
		url.blur();
		// Add first animation
		$("#first").append('<iframe id="animation1" src="animations/animation1.html" frameborder="none"></iframe>');
		// Animate scroll to #first
		$('html, body').animate({
			scrollTop: $($(this).attr('action')).offset().top
		}, 700);
		this.remove();
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
	
	$(document).keydown(function (event) { 	// jQuery: Smooth Scroll on arrow keys
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
