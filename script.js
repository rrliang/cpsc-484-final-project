// python3 -m http.server 4444

// Host given by tutorial page, we are display 1
var host = "cpsc484-01.stdusr.yale.internal:8888";

$(document).ready(function() {
  frames.start();
});

var elements = [];

// Add all interactable elements of specific window
// (and their counters) to the elements array

if (window.location.pathname.includes('/index.html')) {
  var startButton = document.getElementById('start-button');
  startButton.addEventListener('click', startButtonClick);
  elements.push({element:startButton, counter:0});
}

if (window.location.pathname.includes('/preferences.html')) {
  var startOverButton = document.getElementById('start-over-button');
  var searchButton = document.getElementById('search-button');
  var helpButton = document.getElementById('help-button');
  startOverButton.addEventListener('click', startOverButtonClick);
  searchButton.addEventListener('click', searchButtonClick);
  helpButton.addEventListener('click', helpButtonClick);
  elements.push({element:startOverButton, counter:0});
  elements.push({element:searchButton, counter:0});
  elements.push({element:helpButton, counter:0});
}

if (window.location.pathname.includes('/loading.html')) {
  setTimeout(() => {window.location = "./recommendation.html"}, 2000);
}

if (window.location.pathname.includes('/recommendation.html')) {
  var startOverButton = document.getElementById('start-over-button');
  var helpButton = document.getElementById('help-button');
  startOverButton.addEventListener('click', startOverButtonClick);
  helpButton.addEventListener('click', helpButtonClick);
  elements.push({element:startOverButton, counter:0});
  elements.push({element:helpButton, counter:0});
}

function startButtonClick() {
  window.location = "./preferences.html";
}

function startOverButtonClick() {
  window.location = "./index.html";
}

function searchButtonClick() {
  window.location = "./loading.html";
}

function helpButtonClick() {
  window.location.href = "./help.html";
  // console.log('TODO: HELP PAGE')
}


// This function will return the top, bottom, left, right x, y positions of given element
function getElementPosition(el) {
  var rect = el.getBoundingClientRect();
  return rect;
}

// This function will return true if the given elements overlap
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


var handle = null;
var counter = 0
var frames = {
  socket: null,

  previousPositions: [],
  maxPositions: 4,

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
        cursor.style.left = (command[0] - 5) + 'px';
        cursor.style.top = (command[1] - 5) + 'px';
        cursor.style.visibility = "visible";
        cursor.style.zIndex = '9999'; // ensure cursor is always ontop

        var cursorRect = getElementPosition(cursor);
        // Loop through all interactable elements in the page
        // Check to see if the cursor is interacting with element
        // If the cursor is ontop of element, start adding to counter
        // Once counter reaches 2 seconds (counter > 16)
        // Interact with the object, by clicking it
        elements.forEach( pair => {
          var rect1 = getElementPosition(pair.element);
          if (!isOverlap(rect1, cursorRect)) {
            pair.element.classList.add('hovering');
            cursor.src ="img/mouse-over-cursor.png";
            pair.counter += 1;
          } else {
            pair.element.classList.remove('hovering');
            cursor.src ="img/regular-cursor.png";
            pair.counter = 0;
          }
          if (pair.counter > 16) {
            // alert('2 sec');
            pair.element.click();
            pair.counter = 0;
          }
        });
        
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

    // Add the current position to the beginning of the previousPositions array
    this.previousPositions.unshift([right_hand_x, right_hand_y]);
    // Trim the array to the maximum number of positions
    this.previousPositions = this.previousPositions.slice(0, this.maxPositions);

    // Calculate the average position
    var averagePosition = this.previousPositions.reduce(function(acc, pos) {
      return [acc[0] + pos[0], acc[1] + pos[1]];
    }, [0, 0]).map(function(sum) {
      return sum / frames.previousPositions.length;
    });

    return averagePosition;
  }
};