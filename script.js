// python3 -m http.server 4444

var host = "cpsc484-01.stdusr.yale.internal:8888";

$(document).ready(function() {
  frames.start();
});

var startButton = document.getElementById('cursor');

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


function moveActualMouse(command) {
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(document.caretPositionFromPoint(command[0], command[1]));
}

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
        var d = document.getElementById('cursor');
        d.style.position = "absolute";
        d.style.left = command[0] + 'px';
        d.style.top = command[1] + 'px';
        d.style.visibility = "visible";
        moveActualMouse(command);
        
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