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
            simulatedType,    // type
            true,             // bubbles                    
            true,             // cancelable                 
            window,           // view                       
            1,                // detail                     
            touch.screenX,    // screenX                    
            touch.screenY,    // screenY                    
            touch.clientX,    // clientX                    
            touch.clientY,    // clientY                    
            false,            // ctrlKey                    
            false,            // altKey                     
            false,            // shiftKey                   
            false,            // metaKey                    
            0,                // button                     
            null              // relatedTarget              
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
puzzle.h;
puzzle.hTotal;
puzzle.w;
puzzle.wTotal;
puzzle.numOfPieces = puzzle.rows * puzzle.cols;
puzzle.img = document.querySelector("#puzzle-img");
puzzle.slots = document.querySelector("#slots-container");
puzzle.pieces = document.querySelector("#pieces-container");

puzzle.init = function () {
    // Display Elements
    puzzle.img.style.display = "block";
    puzzle.slots.style.display = "block";
    puzzle.pieces.style.display = "block";
    // Set Size and create pieces and slots
    puzzle.setSize();
    puzzle.createPieces();
    // Resize puzzle elements on window resize
    window.addEventListener("resize", puzzle.setSize);

    // jQuery UI drag & drop
    $(".piece").draggable({ stack: "img"});
    $(".slot").droppable({
        accept: function (piece) {
            var dragIndex, dropIndex;
            dropIndex = $(piece).attr("data-index");
            dragIndex = $(this).attr("data-index");
            // if the data-index matches accept drop
            return dropIndex == dragIndex;
        }, hoverClass: "slot-hover",
        drop: function (event, ui) {
            $(ui.draggable).fadeTo("slow", 0.0);
            $(this).fadeTo("slow", 0.0);
            puzzle.numOfPieces--;
            if (puzzle.numOfPieces == 0) {
                puzzle.onComplete();
            }
        }
    });
}
// Set the sizes
puzzle.setSize = function () {
    puzzle.hTotal = puzzle.img.clientHeight;
    puzzle.wTotal = puzzle.img.clientWidth;
    puzzle.slots.style.height = puzzle.hTotal + "px";
    puzzle.slots.style.width = puzzle.wTotal + "px";
    puzzle.h = puzzle.img.clientHeight / puzzle.rows;
    puzzle.w = puzzle.img.clientWidth / puzzle.cols;
    document.querySelectorAll(".piece").forEach(function (piece) {
        piece.style.height = puzzle.h + "px";
        piece.style.width = puzzle.w + "px";
    })
    document.querySelectorAll(".slot").forEach(function (slot) {
        slot.style.height = puzzle.h + "px";
        slot.style.width = puzzle.w + "px";
    })
}
// Create slots and pieces
puzzle.createPieces = function () {
    var offset = 0;
    var maxLeft = puzzle.wTotal - puzzle.w;
    for (var i = 0; i < puzzle.numOfPieces; i++) {
        // Build slot string
        var slot = '<div style="width:' + puzzle.w + 'px; height:' + puzzle.h + 'px;" class="slot" data-index="' + i + '"></div>';
        puzzle.slots.insertAdjacentHTML("beforeend", slot);
        // Build piece string
        var piece = '<img src="img/pieces/p' + i + '.gif" class="piece" data-index="' + i + '" style="width:' + puzzle.w + 'px;height:' + puzzle.h + 'px; left:' + offset + 'px"/>';
        // push to array
        puzzle.piecesArr.push(piece);
        offset += 5;
    }
    while (puzzle.piecesArr.length > 0) {
        var rndIndex = Math.floor(Math.random() * puzzle.piecesArr.length);
        puzzle.pieces.insertAdjacentHTML("beforeend", puzzle.piecesArr[rndIndex]);
        // Remove the piece from array
        puzzle.piecesArr.splice(rndIndex, 1);
    }
};
// Removes element from DOM
puzzle.remove = function () { $(this).remove(); };
// Show overlay on complete
puzzle.onComplete = function () {
    document.querySelector("#overlay").style.display = "flex";
};

// Start Button
document.querySelector("#start-puzzle").addEventListener("click", function () {
    puzzle.init();
});
