// python3 -m http.server 4444

var host = "cpsc484-01.stdusr.yale.internal:8888";

$(document).ready(function() {
  frames.start();
});

var startButton = document.getElementById('start-button');

var handle = null;

function enter () {
  handle = setTimeout(
    function() {
      alert('Hovered for 3s')
  }, 3000);
}

function out() {
  clearTimeout(handle);
}
// hoverTimer: function(el) {
  
// }

//DOESN"T work
function moveActualMouse(command) {
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(document.caretPositionFromPoint(command[0], command[1]));
  console.log('moved cursor to ' + command[0] + ", " + command[1])
}

function getElementPosition(el) {
  var rect = el.getBoundingClientRect();
  return rect;
}

function isOverlap(rect1, rect2) {
  var isOverlap = false;
  if (
    rect2.top < rect1.top || 
    rect2.right > rect1.right ||
    rect2.bottom > rect1.bottom || 
    rect2.left < rect1.left) {

    isOverlap = true;
  }
  
  return isOverlap;
}

var counter = 0
var frames = {
  socket: null,

  start: function() {
    var url = "ws://" + host + "/frames";
    frames.socket = new WebSocket(url);

    frames.socket.onopen = function() {
      console.log("WebSocket connection established");
    };

    frames.socket.onclose = function(event) {
      console.log("WebSocket connection closed: " + event.reason);
    };

    frames.socket.onerror = function(error) {
      console.error("WebSocket error: " + error.message);
    };

    frames.socket.onmessage = function(event) {
      var command = frames.show(JSON.parse(event.data));
      if (command !== null) {
        var cursor = document.getElementById('cursor');
        cursor.style.position = "absolute";
        cursor.style.left = command[0] + 'px';
        cursor.style.top = command[1] + 'px';
        cursor.style.visibility = "visible";
        cursor.style.zIndex = '9999';
        // moveActualMouse(command);
        var rect1 = getElementPosition(startButton);
        var rect2 = getElementPosition(cursor);
        if (!isOverlap(rect1, rect2)) {
          startButton.classList.add('hovering');
          cursor.src ="img/mouse-over-cursor.png";
          counter += 1;
        } else {
          startButton.classList.remove('hovering');
          cursor.src ="img/regular-cursor.png";
          counter = 0;
        }
        if (counter > 12) {
          alert('3 sec');
          counter = 0;
        }
      } else {
        document.getElementById('cursor').style.visibility = "hidden";
      }
    };
  },
  
  show: function(frame) {
    if (frame.people.length < 1) {
      return null;
    }

    // Adjust these offset values to position the cursor correctly on your screen
    var offsetX = 200;
    var offsetY = 200;
    var correctionFactorX = 25;
    var correctionFactorY = 35;

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var right_hand_x = (frame.people[0].joints[15].position.x * -2) + offsetX;
    var right_hand_y = frame.people[0].joints[15].position.y + offsetY;

    // Constrain the cursor to stay within the screen bounds
    right_hand_x = Math.max(0, Math.min(right_hand_x, screenWidth - correctionFactorX));
    right_hand_y = Math.max(0, Math.min(right_hand_y, screenHeight - correctionFactorY));

    // Smoothing
    var smoothingFactor = 0.5; // Adjust this value between 0 (no smoothing) and 1 (full smoothing)
    if (this.previousPosition) {
        right_hand_x = smoothingFactor * right_hand_x + (1 - smoothingFactor) * this.previousPosition[0];
        right_hand_y = smoothingFactor * right_hand_y + (1 - smoothingFactor) * this.previousPosition[1];
    }
    this.previousPosition = [right_hand_x, right_hand_y];
    
    return [right_hand_x, right_hand_y];
  }
};