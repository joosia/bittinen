// ruuhkanhallinta.js, Eevan scriptit
var clouds = [];
var cloudsCount = 1;

var xMin = 0;
var xMax = 1980;
var yMin = 0;
var yMax = 1080;
var xOutStep = 1600;

// cloud class, eli toisin funktio
function Cloud(img, x, y, dx) {
    this.img = img; 
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.speed = Math.random()*10+2;
    this.width = img.width();
}

//
function createClouds() {
    console.log($("#traffic-control").height());
    for (var i=0;i<cloudsCount; i++) {
        // create a new img
        var img = $("<img>", {
            src:"images/bittinen_pilvet.png"
        }).addClass("cloud");
        // random movement, dx == 1 or dx == -1
        var dx = 1;
        if (Math.random() < 0.5) dx = -1; // right to left
        // position
        var x = Math.random()*xMax;
        var y = Math.random() * $("#traffic-control").height() * 0.1 + $("#traffic-control").offset().top;
        // set offset
        img.offset( {left:x, top:y });
        // append to body
        $("#cloudcontainer").append(img);
        // create a cloud
        clouds[i] = new Cloud(img, x, y, dx);
        
    }
}

// move clouds
function move() {
    for (var i=0;i<cloudsCount;i++) {
        if (clouds[i].x > (xMax+xOutStep) || clouds[i].x < (xMin-clouds[i].width-xOutStep))
            {
                clouds[i].dx *= -1;
                clouds[i].y = Math.random()*$("#traffic-control").height()*0.1+$("#traffic-control").offset().top;
            }
        // move
        clouds[i].x += (clouds[i].dx * clouds[i].speed);
        var cloudIMG = clouds[i].img;
        // move it
        cloudIMG.offset({ left:clouds[i].x, top:clouds[i].y });
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

function poliisi(){
    //console.log("testi")
    $("#poliisi1").attr("src", "images/stop_poliisi.gif");
    setTimeout(poliisiStop, 1350);
}

// kutsutaan kohteessa poliisi
function poliisiStop(){
    $("#poliisi1").attr("src", "images/seisova_poliisi.gif");
}

function paketti(){
    $("#paketti1").attr("src", "images/seisova_paketti.gif");
    setTimeout(pakettiTuleepahamieli, 6000)
}


function pakettiTuleepahamieli(){
    $("#paketti1").attr("src", "images/tuleepahamieli_paketti.gif")
    setTimeout(pahamieliPaketti, 800);
}

// vaihda oikea kuva
function pahamieliPaketti() {
    $("#paketti1").attr("src", "images/pahamieli_paketti.gif")
}

// käynnistetään animaatio
function ruuhkanhallinta() {
    $("#paketti").animate({ left: '600px' }, 5000, paketti);
    $("#poliisi").delay(8000).animate({ left: '1200px' }, poliisi);
    $("#info").fadeTo("slow", 0.0);
}
