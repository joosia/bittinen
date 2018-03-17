/* Touch Support from GitHub
 *
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {
    // Detect touch support
    $.support.touch = 'ontouchend' in document;
    // Ignore browsers without touch support
    if (!$.support.touch) {
        return;
    }
    var mouseProto = $.ui.mouse.prototype,
        _mouseInit = mouseProto._mouseInit,
        touchHandled;

    function simulateMouseEvent(event, simulatedType) { //use this function to simulate mouse event
        // Ignore multi-touch events
        if (event.originalEvent.touches.length > 1) {
            return;
        }
        event.preventDefault(); //use this to prevent scrolling during ui use

        var touch = event.originalEvent.changedTouches[0],
            simulatedEvent = document.createEvent('MouseEvents');
        // Initialize the simulated mouse event using the touch event's coordinates
        simulatedEvent.initMouseEvent(
            simulatedType, // type
            true, // bubbles                    
            true, // cancelable                 
            window, // view                       
            1, // detail                     
            touch.screenX, // screenX                    
            touch.screenY, // screenY                    
            touch.clientX, // clientX                    
            touch.clientY, // clientY                    
            false, // ctrlKey                    
            false, // altKey                     
            false, // shiftKey                   
            false, // metaKey                    
            0, // button                     
            null // relatedTarget              
        );

        // Dispatch the simulated event to the target element
        event.target.dispatchEvent(simulatedEvent);
    }
    mouseProto._touchStart = function (event) {
        var self = this;
        // Ignore the event if another widget is already being handled
        if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
            return;
        }
        // Set the flag to prevent other widgets from inheriting the touch event
        touchHandled = true;
        // Track movement to determine if interaction was a click
        self._touchMoved = false;
        // Simulate the mouseover event
        simulateMouseEvent(event, 'mouseover');
        // Simulate the mousemove event
        simulateMouseEvent(event, 'mousemove');
        // Simulate the mousedown event
        simulateMouseEvent(event, 'mousedown');
    };

    mouseProto._touchMove = function (event) {
        // Ignore event if not handled
        if (!touchHandled) {
            return;
        }
        // Interaction was not a click
        this._touchMoved = true;
        // Simulate the mousemove event
        simulateMouseEvent(event, 'mousemove');
    };
    mouseProto._touchEnd = function (event) {
        // Ignore event if not handled
        if (!touchHandled) {
            return;
        }
        // Simulate the mouseup event
        simulateMouseEvent(event, 'mouseup');
        // Simulate the mouseout event
        simulateMouseEvent(event, 'mouseout');
        // If the touch interaction did not move, it should trigger a click
        if (!this._touchMoved) {
            // Simulate the click event
            simulateMouseEvent(event, 'click');
        }
        // Unset the flag to allow other widgets to inherit the touch event
        touchHandled = false;
    };
    mouseProto._mouseInit = function () {
        var self = this;
        // Delegate the touch handlers to the widget's element
        self.element
            .on('touchstart', $.proxy(self, '_touchStart'))
            .on('touchmove', $.proxy(self, '_touchMove'))
            .on('touchend', $.proxy(self, '_touchEnd'));

        // Call the original $.ui.mouse init method
        _mouseInit.call(self);
    };
})(jQuery);



/*–––––––––––––––––––––––––––––––––––––*
| SQUARE JIGSAW PUZZLE                 |
| A simple javascript plus jQuery UI   |
| (drag and drop) puzzle game.         |
|                                      |
| © Esa-Pekka Autio                    |
| 1.3.2018, version 1.0                |
*–––––––––––––––––––––––––––––––––––––*/
var puzzle = {}
puzzle.piecesArr = [];
puzzle.rows = 4;
puzzle.cols = 5;
puzzle.pieceHeight;
puzzle.pieceWidth;
puzzle.height;
puzzle.width;
puzzle.numOfPieces = puzzle.rows * puzzle.cols;
puzzle.img = document.querySelector("#puzzle-img");
puzzle.slotsContainer = document.querySelector("#slots-container");
puzzle.piecesContainer = document.querySelector("#pieces-container");
// puzzle.sound1 = new Howl({src: ['sounds/zig-zag.mp3']});
// puzzle.sound2 = new Howl({ src: ['sounds/zig-zag.mp3'] });

puzzle.init = function () {

    // Display Elements
    puzzle.img.style.display = "block";
    puzzle.slotsContainer.style.display = "block";
    puzzle.piecesContainer.style.display = "block";
    // Set Size and create pieces and slots
    puzzle.setSize();
    puzzle.createPieces();
    // Resize puzzle elements on window resize
    window.addEventListener("resize", puzzle.setSize);

    // jQuery UI drag & drop
    $(".piece").draggable({
        stack: "img",
        containment: puzzle.piecesContainer
    }).on("mousedown mouseup", function () {
        $(this).toggleClass("scale-up-fast");
    });
    $(".slot").droppable({
        accept: function (piece) {
            var dragIndex, dropIndex;
            dragIndex = $(piece).attr("data-index");
            dropIndex = $(this).attr("data-index");
            // if the data-index matches accept drop
            return dragIndex === dropIndex
        },
        hoverClass: function () {
            $(this).toggleClass("slot-hover");
            $(".piece").toggleClass("valid");
        },
        drop: function (event, ui) {
            ui.draggable.fadeTo("slow", 0.0, remove);
            $(this).fadeTo("slow", 0.0);
            puzzle.numOfPieces--;
            //console.log(puzzle.numOfPieces);
            if (puzzle.numOfPieces === 0) {
                puzzle.onComplete();
            }
        }
    });
}

// Set the sizes
puzzle.setSize = function () {
    puzzle.height = puzzle.img.clientHeight;
    puzzle.width = puzzle.img.clientWidth;
    puzzle.slotsContainer.style.height = puzzle.height + "px";
    puzzle.slotsContainer.style.width = puzzle.width + "px";
    puzzle.pieceHeight = puzzle.img.clientHeight / puzzle.rows;
    puzzle.pieceWidth = puzzle.img.clientWidth / puzzle.cols;
    document.querySelectorAll(".piece").forEach(function (piece) {
        piece.style.height = puzzle.pieceHeight + "px";
        piece.style.width = puzzle.pieceWidth + "px";
    })
    document.querySelectorAll(".slot").forEach(function (slot) {
        slot.style.height = puzzle.pieceHeight + "px";
        slot.style.width = puzzle.pieceWidth + "px";
    })
}

// Create slots and pieces
puzzle.createPieces = function () {
    var maxLeft = puzzle.width - puzzle.pieceWidth;
    for (var i = 0; i < puzzle.numOfPieces; i++) {
        // Build slot string
        var slot = '<div style="width:' + puzzle.pieceWidth + 'px; height:' + puzzle.pieceHeight + 'px;" class="slot" data-index="' + i + '"></div>';
        puzzle.slotsContainer.insertAdjacentHTML("beforeend", slot);
        // Build piece string
        var piece = '<img src="images/pieces/p' + i + '.gif" class="piece" data-index="' + i + '" width="' + puzzle.pieceWidth + 'px" height="' + puzzle.pieceHeight + 'px"';
        // push to array
        puzzle.piecesArr.push(piece);
    }
    // Add randomness. First shuffle and then set random positions,
    // so basically twice the randomness B)
    puzzle.piecesArr = shuffle(puzzle.piecesArr);
    puzzle.offsetPieces();
    puzzle.piecesContainer.insertAdjacentHTML("beforeend", puzzle.piecesArr.join(""));
    puzzle.piecesArr = remove(); // Delete array

};

puzzle.offsetPieces = function () {
    var maxX = window.innerWidth - puzzle.pieceWidth;
    var maxY = window.innerHeight/3 - puzzle.pieceHeight;
    var offsetX = 0;
    var offsetY = 0;
    for(var i = 0; i < puzzle.piecesArr.length; i++) {
            var rndX = Math.floor(Math.random() * maxX);
            var rndY = Math.floor(Math.random() * maxY);
        puzzle.piecesArr[i] += "style='left:" + rndX + "px; top:" + rndY + "px'/>";
    }
};

// Show overlay on complete
puzzle.onComplete = function () {
    // Remove puzzle containers
    puzzle.slotsContainer.remove()
    puzzle.piecesContainer.remove()
    overlay.content.html(overlay.html.puzzleComplete);
    overlay.show();
};

// Removes element from DOM
// There already exists .remove() method, but this is for removing dropped pieces
function remove() {
    $(this).remove()
};

// Shuffle arrays
function shuffle(arr) {
    var temp, rndIndex;
    // loop through array starting from the last index
    for (var i = arr.length - 1; i >= 0; i--) {
        var rndIndex = Math.floor(Math.random() * arr.length); // get random index
        // Switch elements
        temp = arr[i];
        arr[i] = arr[rndIndex];
        arr[rndIndex] = temp;
    }
    return arr; // return shuffled arr
}