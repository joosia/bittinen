var root = $('html, body'); 
/*–––––––––––––––––––––––––––––*/
/*––––– Overlay Settings  –––––*/
/*–––––––––––––––––––––––––––––*/
var overlay = {};
overlay.container = $("#overlay-container");
overlay.textContainer = $("#overlay");
overlay.content = $("#overlay-text-content");
overlay.minimize = function (e) { 
	e.stopPropagation();
	//overlay.content.children("p").slideToggle("fast");
	overlay.textContainer.toggleClass("overlay-minimized");
};
overlay.btn = $("#overlay-btn");
overlay.link = $("#btn-link");
overlay.html = {
	factory: "<h1>Reitittimet</h1><p>Matkallaan paketit kulkevat useiden reitittimien kautta, jotka nimensä mukaisesti ohjaavat liikennettä. Todennäköisesti myös sinun kotona on ainakin yksi reititin.</p>",
	dns:"", // dns screen
	underwater: "<h1>Merikaapelit</h1><p>Liikenne kulkee mantereelta toiselle merten pohjissa. Näiden kestävien kaapeleiden huoltoon ja asennukseen on myös omat erikoisaluksensa eli kaapelilaivat.</p>",
	traffic: "<h1>Ruuhkanhallinta</h1><p>Aivan kuten olet oppinut, autolla ei saa ajaa liian kovaa teillä, vaan kaikkien pitää noudattaa nopeusrajoituksia. Säännöt luovat liikenteestä toimivan. Samat säännöt pätevät Internetissäkin, mutta bittien maailmassa liikennepoliisina toimii reititin.",
	server: "<h1>Palvelimet</h1><p>Perillä ollaan! Nettisivut sijaitsevat yhdellä tai usealla eri palvelintietokoneella. Koska nettisivut sisältävät paljon dataa, niiden kuljettamiseen tarvitaan monta pakettia. Netin liikenteestä, osa kulkee myös avaruudessa satelliittien välityksellä, joten oikaistaanpa hieman ja lähdetään raketilla takaisin.</p>",
	puzzle: "<h1>Melkein valmista...</h1><p>Kaikki tarvittavat palaset ovat nyt koossa! Nettisivu ei kuitenkaan näy vielä oikein, sillä paloja ei ole kasattu takaisin oikeaan muotoon. Tämä tehtävä kuuluu normaalisti internet-selaimelle, mutta kokeile saisitko sinä näkymään sivun oikein.</p>",
	puzzleComplete: "<h1>Mahtavaa! Sait palat paikoilleen.</h1><p>Nyt pakettimme on suorittanut tehtävänsä ja sivu on latautunut. Todellisuudessa kaikki tämä tapahtuu lähes silmänräpäyksessä. Ihmeellistä, eikö vain?</p><img src='images/paketti.png' class='packet'/>",
	video: "<video autoplay playsinline controls id='video' style='width: 100%; height=100%;' preload='auto'><source src='video/bittinen.mp4'></video>",
}

overlay.show = function(){
	// Add delay if not on intro or puzzle screen
	if (overlay.link.attr("href") == "#intro" || overlay.link.attr("href") == "#puzzleComplete" || overlay.link.attr("href") == "#video") {
		overlay.container.fadeIn("normal");
	} else {
		setTimeout(function () {
			switch (overlay.link.attr("href")) {
				case "#factory":
					$("#intro").attr("id", "puzzle"); // Change the id for later use
					overlay.container.css("background", "none"); // remove overlay shadow
					overlay.textContainer.css("top", "2.5%");
					overlay.content.html(overlay.html.factory);
					overlay.link.text("Jatka");
					break;
				case "#dns":
					$(overlay.btn).one("click", btnClick);
					//overlay.textContainer.css({ top: "2.5%", left: "5%" });	
					//overlay.content.html(overlay.html.dns);
					break;
				case "#underwater":
					$(overlay.btn).one("click", btnClick);
					overlay.content.html(overlay.html.underwater);
					break;
				case "#traffic-control":
					$(overlay.btn).one("click", btnClick);
					overlay.content.html(overlay.html.traffic);
					if (window.innerWidth > 850) {
						overlay.textContainer.css({ top: "2.5%", left: "1.5%" });
					} else {
						overlay.textContainer.css({ top: "1vh", left: "1%" });
					}
					break;
				case "#server":
					$(overlay.btn).one("click", btnClick);
					overlay.content.html(overlay.html.server);
					if (window.innerWidth > 850) {
						overlay.textContainer.css({ top: "2.5%", left: "25%" });
					} else {
						overlay.textContainer.css({ top: "1vh", left: "1%" });
					}
					$("script[src='animations/underwaterAnimation.js']").remove();
					$("#underwater-animation").remove();
					$("script[src='js/create.js']").remove();
					$("#factory-animation").remove();
					$("script[src='animations/factoryAnimation.js']").remove();
					break;
				case "#puzzle":
					$(overlay.btn).one("click", btnClick);
					overlay.container.css("background", "rgba(0, 0, 0, 0.3)");
					overlay.content.html(overlay.html.puzzle);
					break;
				default:
					break;
			}
			overlay.container.fadeIn("normal");
		}, 2000);
	}
	if (overlay.link.attr("href") == "#puzzleComplete" || overlay.link.attr("href") == "#video") {
		switch (overlay.link.attr("href")) {
			case "#puzzleComplete":
				$(overlay.btn).one("click", btnClick);	
				overlay.content.html(overlay.html.puzzleComplete);
				root.css("overflow", "auto"); // enable scroll
				break;
			case "#video":
				$(overlay.btn).one("click", btnClick);
				overlay.content.html(overlay.html.video);
				break;
			default:
				break;
		}
	}
	// Start underwater animation
	if (overlay.link.attr("href") == "#underwater" ){
		underwaterAnimation();
	}
	// Start server animation
	if (overlay.link.attr("href") == "#server") {
			serverAnimation();
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
	
	// Scroll to top on load and refresh before overflow:hidden. The page may get stuck otherwises in some cases. setTimeout doesn't have callback functionality, so let's use animete()
	$('html').animate({
		scrollTop: 0
	}, function () {
		$("body").css("overflow", "hidden");
	});

	/* Overlay buttons */
	overlay.textContainer.on("click", overlay.minimize);
	overlay.btn.on({
		click: btnClick,
		dblclick: function (e) { 
			e.preventDefault();
			e.stopPropagation();
		},
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

	// url validation with regex
	var pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)+([{1}[a-z0-9]+)*\.[a-z]{2,5}?$/; 
	url.on("input", function () {
		if ( pattern.test( $(this).val() ) ) {
			$(this).css("box-shadow", "0 0 8px rgb(150, 206, 180)");
		}
		else {
			$(this).css("box-shadow", "0 0 8px rgb(255, 111, 105)");
		}
	});

	// Function on url-submit
	var errors = 0;
	url.on("keypress", function (e) {
		if (pattern.test($(this).val()) && e.which === 13) {
			url.blur();
			overlay.link.attr("href", "#factory"); // switch href
			factoryAnimation() // Run factory animation
			// Animate scroll to #factory
			animateScroll();
			overlay.show();
			form.remove();
		}
		if (!pattern.test($(this).val()) && e.which === 13) {
			if (errors === 0) {
				url.blur()
				overlay.content.html("<h1>Voi pahus!</h1>Jokin meni nyt pieleen. Muistithan kirjoittaa osoitteen alkuun https:// tai www ?");
			} else {
				url.blur()
				overlay.content.html("<h1>Voi pahus!</h1>Jossain on vielä virhe. Kokeile käyttää muotoa: https://www.osoite.fi ");
			}
			errors++;
			overlay.link.text("Sulje");
			overlay.show();
			overlay.btn.one("click", function () {
				url.focus();
			});
		}
	});


	// Eeva, ruuhkanhallinta
	var startPosX = $(window).width();
	$("#paketti").css({
		right: startPosX,
	});
	$("#poliisi").css({
		left: startPosX,
	});
	createClouds();
	window.requestAnimationFrame(move);

}); // $(document).ready(function(){});




/*–––––––––––––––––––––––––––––––––––––––––––––––*/
/*––––– ruuhkanhallinta.js, Eevan scriptit  –––––*/
/*–––––––––––––––––––––––––––––––––––––––––––––––*/
var clouds = [];
var cloudsCount = 1;

var pakettiW = document.getElementById("paketti1").clientWidth;
var poliisiW = document.getElementById("poliisi1").clientWidth;
var xMin = 0;
var xMax = window.innerWidth;
//var yMin = 0;
//var yMax = window.innerHeigh;
var xOutStep = 1600;

// cloud class, eli toisin funktio
function Cloud(img, x, y, dx) {
	this.img = img;
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.speed = Math.random() * 10 + 2;
	this.width = img.width();
}

//
function createClouds() {
	//console.log($("#traffic-control").height());
	for (var i = 0; i < cloudsCount; i++) {
		// create a new img
		var img = $("<img>", {
			src: "images/bittinen_pilvet.png"
		}).addClass("cloud");
		// random movement, dx == 1 or dx == -1
		var dx = 1;
		if (Math.random() < 0.5) dx = -1; // right to left
		// position
		var x = Math.random() * xMax;
		var y = Math.random() * $("#traffic-control").height() * 0.1 + $("#traffic-control").offset().top;
		// set offset
		img.offset({ left: x, top: y });
		// append to body
		$("#cloudcontainer").append(img);
		// create a cloud
		clouds[i] = new Cloud(img, x, y, dx);

	}
}

// move clouds
function move() {
	for (var i = 0; i < cloudsCount; i++) {
		if (clouds[i].x > (xMax + xOutStep) || clouds[i].x < (xMin - clouds[i].width - xOutStep)) {
			clouds[i].dx *= -1;
			clouds[i].y = Math.random() * $("#traffic-control").height() * 0.1 + $("#traffic-control").offset().top;
		}
		// move
		clouds[i].x += (clouds[i].dx * clouds[i].speed);
		var cloudIMG = clouds[i].img;
		// move it
		cloudIMG.offset({ left: clouds[i].x, top: clouds[i].y });
	}
	window.requestAnimationFrame(move);
}

// poliisin ja paketin animaatio
// $(document).ready(function() {
//     createClouds();
//     window.requestAnimationFrame(move);
//     ruuhkanhallinta();
//     // $("#startAnimation").click(function(){
//     //     //console.log("paketti");
//     //     $("#paketti").animate({left: '600px'}, 5000, paketti);
//     //     $("#poliisi").delay(8000).animate({left: '1200px'}, poliisi);
//     //     // $("#info").fadeTo("slow", 0.0);
//     // });

// });

function poliisi() {
	//console.log("testi")
	$("#poliisi1").attr("src", "images/stop_poliisi.gif");
	setTimeout(poliisiStop, 1350);
}

// kutsutaan kohteessa poliisi
function poliisiStop() {
	$("#poliisi1").attr("src", "images/seisova_poliisi.gif");
}

function paketti() {
	$("#paketti1").attr("src", "images/seisova_paketti.gif");
	setTimeout(pakettiTuleepahamieli, 6000)
}


function pakettiTuleepahamieli() {
	$("#paketti1").attr("src", "images/tuleepahamieli_paketti.gif")
	setTimeout(pahamieliPaketti, 800);
}

// vaihda oikea kuva
function pahamieliPaketti() {
	$("#paketti1").attr("src", "images/pahamieli_paketti.gif")
}

// käynnistetään animaatio
function ruuhkanhallinta() {
	var windowWidth = $(window).width();
	var pakettiX = windowWidth / 2;
	var poliisiX = windowWidth / 1.9;
	$("#paketti").animate({ right: pakettiX }, 4000, paketti);
	$("#poliisi").delay(3000).animate({ left: poliisiX }, 1000, poliisi);
}


function showVideo() {
	overlay.content.html(
	"<video muted autoplay playsinline controls id='video' style='width: 100%; height=100%; border-radius: 8px;' preload='auto'><source src='video/bittinen.mp4'></video>")
	$("#video").on("ended", function () {
		$("#video").fadeOut();
		overlay.content.html("<img src='images/paketti.png' class='packet'/>");
		overlay.btn.text("Pelaa uudelleen").css("color","white");
	});
}

function btnClick (e) {
		e.preventDefault();
		e.stopPropagation();
	//overlay.content.children("p:hidden").slideDown("fast");
	overlay.content.children("p").slideToggle("fast");
		overlay.textContainer.removeClass("overlay-minimized");
		overlay.container.fadeOut("fast");
		switch (overlay.link.attr("href")) {
			case "#factory":
				$(this).off("click", btnClick);
				clearAnimation(); // Clear animation for better performance
				// Add underwater animation script
				$("body").append('<script src="animations/underwaterAnimation.js"></script>');
				overlay.link.attr("href", "#underwater");
				animateScroll();
				overlay.show();
				break;
			case "#underwater":
				$(this).off("click", btnClick);
				clearAnimation();
				$("body").append('<script src="animations/serverAnimation.js"></script>');
				overlay.link.attr("href", "#traffic-control");
				animateScroll();
				overlay.show();
				ruuhkanhallinta();
				break;
			case "#traffic-control":
				$(this).off("click", btnClick);
				overlay.link.attr("href", "#server");
				animateScroll();
				overlay.show();
				break;
			case "#server":
				$(this).off("click", btnClick);
				overlay.link.attr("href", "#puzzle"); // switch href
				animateScroll();
				overlay.show();
				puzzle.init()
				setTimeout(function () {
					clearAnimation();
					$("html").css("overflow", "hidden");
					// html overflow hidden to prevent scroll to on drag
				}, 1000); // Smooth scroll to top last about 1000ms. 
				break;
			case "#puzzle":
				$(this).off("click", btnClick);
				overlay.link.attr("href", "#puzzleComplete");
				break;
			case "#puzzleComplete":
				$(this).off("click", btnClick);	
				overlay.show();
				showVideo();
				overlay.link.attr("href", "#video");
				break;
			case "#video":
				location.reload(); // Reload page
				break;
			default:
				break;
		}
	}