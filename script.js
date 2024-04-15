// python3 -m http.server 4444

// Host given by tutorial page, we are display 1
var host = "cpsc484-01.stdusr.yale.internal:8888";

$(document).ready(function() {
  frames.start();
});

//Defualts to no preferences, which essentially is both
const userPreferences = {
  distance: 'Both',
  inOutdoor: 'Both',
  quietNoise: 'Both',
  type: 'Both'
};

const studySpots = [
  {
      location: 'AKW',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'STEM',
      description: 'At the AKW, you can find study spaces on the second and third floor.',
      gpsLink: 'https://maps.app.goo.gl/QuoYxYTTSKDZkV2d9',
      image: 'study_images/AKW.jpg'
  },
  {
      location: 'Sterling Library',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/2FFbyn19ZPCYqqm28',
      image: 'study_images/Sterling.jpg'
  },
  {
      location: 'Med School Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'STEM',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/Tptd4BpT4BqKE9xF9',
      image: 'study_images/MedSchool.jpg'
  },
  {
      location: 'Yale SOM',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/zGB6V1eL9Yvjbzx59',
      image: 'study_images/SOM.jpg'
  },
  {
      location: 'Pierson Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/9VwWyzQD6hMg5gUKA',
      image: 'study_images/Pierson.jpg'
  },
  {
      location: 'CEID',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'STEM',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/yDErt74DSHTmasUW8',
      image: 'study_images/CEID.jpg'
  },
  {
      location: 'Cross Campus',
      distance: '< 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/JVriypGNb6D3pgb87',
      image: 'study_images/CrossCampus.jpg'
  },
  {
      location: 'Atticus Coffee',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/b2GsN9RWoEGtNEWP9',
      image: 'study_images/Atticus.jpg'
  },
  {
      location: 'Yale Art Gallery',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/zM2gofzvwGxkXLM77',
      image: 'study_images/YUAG.jpg'
  },
  {
      location: 'Classics Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/9vRDQudXvtmqwCKT8',
      image: 'study_images/Classics.jpg'
  },
  {
      location: 'Bass Library',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/b2GsN9RWoEGtNEWP9',
      image: 'study_images/Bass.jpg'
  },
  {
      location: 'Marx Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/mH2q4y1bLDkU4dLh7',
      image: 'study_images/Marx.jpg'
  },
  {
      location: 'Trumbull Buttery',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/9AdZYWyydudApLkQA',
      image: 'study_images/TrumbullButtery.jpg'
  },
  {
      location: 'Donut Krazy',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/A85N4dAuYxLJwgMx6',
      image: 'study_images/DonutKrazy.jpg'
  },
  {
      location: 'Pauli Murray Common Room',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/g65baWzHhob1VLWNA',
      image: 'study_images/PauliMurray.jpg'
  },
  {
      location: 'Benches by Ingalls Rink',
      distance: '< 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/T9nxU6v3AZnPsuy56',
      image: 'study_images/Ingalls.jpg'
  },
  {
      location: 'Good Life Center',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/oPHtkqxR1cdu1JTg7',
      image: 'study_images/GoodLifeCenter.jpg'
  },
  {
      location: 'Beinecke Plaza',
      distance: '< 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/4vxXhNnySkvPYWFW9',
      image: 'study_images/BeineckePlaza.jpg'
  },
  {
      location: 'Old Campus Courtyard',
      distance: '> 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/iigZseK36HTpgCxWA',
      image: 'study_images/OldCampus.jpg'
  },
  {
      location: 'William L. Harkness Hall',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/puctpKikT7j9YfbcA',
      image: 'study_images/WLH.jpg'
  },
  {
      location: 'Humanities Quadrangle',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/m6Rok2PeNLScWt5n9',
      image: 'study_images/hq.jpg'
  },
  {
      location: 'Davenport Courtyard',
      distance: '> 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Both',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/C7q6o6WqZHNyy5Qb6',
      image: 'study_images/Davenport.jpg'
  },
  {
      location: 'Loose Leaf Cafe',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/YPNB7kg2NTua4Wdg6',
      image: 'study_images/LooseLeaf.jpg'
  },
  {
      location: 'Willoughbys',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/Ek3Fzr7TJx9kRzj79',
      image: 'study_images/Willoughby.jpg'
  },
  {
      location: 'The Whale Tea',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/UtShmj1tFZDuta249',
      image: 'study_images/whaletea.jpg'
  },
  {
      location: 'Law Library',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/yoxPDbfgwc32wPQz7',
      image: 'study_images/LawLibrary.jpg'
  },
  {
      location: 'Haas Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/8ZgawCREGWcMm39n9',
      image: 'study_images/HaasLibrary.jpg'
  },
  {
      location: 'School of Architecture Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/k1SgNW2tDU4abbih8',
      image: 'study_images/SchoolofArchitecture.jpg'
  },
  {
      location: 'Rosenfeld Hall',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: '',
      gpsLink: 'https://maps.app.goo.gl/k1SgNW2tDU4abbih8',
      image: 'study_images/RosenfeldHall.jpg'
  }
 ];

function filterStudySpots(preferences) {
  return studySpots.filter(spot => {
      return (preferences.distance === spot.distance || preferences.distance === 'Both') &&
             (preferences.inOutdoor === spot.inOutdoor || preferences.inOutdoor === 'Both') &&
             (preferences.quietNoise === spot.quietNoise || preferences.quietNoise === 'Both') &&
             (preferences.type === spot.type || preferences.type === 'Both');
  });
}

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

  var indoorButton = document.getElementById('indoor-option');
  var indoorNoPreference = document.getElementById('no-preference-location');
  var outdoorButton = document.getElementById('outdoor-option');

  var indoorOptions = [indoorButton, indoorNoPreference, outdoorButton];
  
  var quietButton = document.getElementById('quiet-option');
  var quietNoPreferenceButton = document.getElementById('no-preference-noise');
  var noiseButton = document.getElementById('noise-option');
  
  var quietOptions = [quietButton, quietNoPreferenceButton, noiseButton];
  
  var shortButton = document.getElementById('short-walk-option');
  var shortNoPreferenceButton = document.getElementById('no-preference-walk');
  var longButton = document.getElementById('long-walk-option');
  
  var shortOptions = [shortButton, shortNoPreferenceButton, longButton];
  
  var stemButton = document.getElementById('stem-option');
  var stemNoPreferenceButton = document.getElementById('no-preference-major');
  var humanitiesButton = document.getElementById('humanities-option');
  
  var stemOptions = [stemButton, stemNoPreferenceButton, humanitiesButton];


  startOverButton.addEventListener('click', startOverButtonClick);
  searchButton.addEventListener('click', searchButtonClick);
  helpButton.addEventListener('click', helpButtonClick);

  indoorButton.addEventListener('click', function(event) {
    indoorOptionClicked(event, indoorOptions, "right");
  });
  indoorNoPreference.addEventListener('click', function(event) {
    indoorOptionClicked(event, indoorOptions, "middle");
  });
  outdoorButton.addEventListener('click', function(event) {
    indoorOptionClicked(event, indoorOptions, "left");
  });

  quietButton.addEventListener('click', function(event) {
    quietOptionClicked(event, quietOptions, "right");
  });
  quietNoPreferenceButton.addEventListener('click', function(event) {
    quietOptionClicked(event, quietOptions, "middle");
  });
  noiseButton.addEventListener('click', function(event) {
    quietOptionClicked(event, quietOptions, "left");
  });

  shortButton.addEventListener('click', function(event) {
    shortOptionClicked(event, shortOptions, "right");
  });
  shortNoPreferenceButton.addEventListener('click', function(event) {
    shortOptionClicked(event, shortOptions, "middle");
  });
  longButton.addEventListener('click', function(event) {
    shortOptionClicked(event, shortOptions, "left");
  });

  stemButton.addEventListener('click', function(event) {
    stemOptionClicked(event, stemOptions, "left");
  });
  stemNoPreferenceButton.addEventListener('click', function(event) {
    stemOptionClicked(event, stemOptions, "middle");
  });
  humanitiesButton.addEventListener('click', function(event) {
    stemOptionClicked(event, stemOptions, "right");
  });
  
  elements.push({element:startOverButton, counter:0});
  elements.push({element:searchButton, counter:0});
  elements.push({element:helpButton, counter:0});

  elements.push({element:indoorButton, counter:0});
  elements.push({element:indoorNoPreference, counter:0});
  elements.push({element:outdoorButton, counter:0});

  elements.push({element:quietButton, counter:0});
  elements.push({element:quietNoPreferenceButton, counter:0});
  elements.push({element:noiseButton, counter:0});

  elements.push({element:shortButton, counter:0});
  elements.push({element:shortNoPreferenceButton, counter:0});
  elements.push({element:longButton, counter:0});

  elements.push({element:stemButton, counter:0});
  elements.push({element:stemNoPreferenceButton, counter:0});
  elements.push({element:humanitiesButton, counter:0});

  indoorNoPreference.click();
  quietNoPreferenceButton.click();
  shortNoPreferenceButton.click();
  stemNoPreferenceButton.click();

}
var filteredSpots = NaN;
if (window.location.pathname.includes('/loading.html')) {
  filteredSpots = filterStudySpots(userPreferences);
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

function indoorOptionClicked(event, options, type) {
  options.forEach( element => {
    element.classList.remove('options-buttons-clicked');
  });
  event.target.classList.add('options-buttons-clicked');
  if (type == "right") {
    userPreferences.inOutdoor = "Indoor";
  }
  if (type == "middle") {
    userPreferences.inOutdoor = "Both";
  }
  if (type == "left") {
    userPreferences.inOutdoor = "Outdoor";
  }
}

function quietOptionClicked(event, options, type) {
  options.forEach( element => {
    element.classList.remove('options-buttons-clicked');
  });
  event.target.classList.add('options-buttons-clicked');
  if (type == "right") {
    userPreferences.quietNoise = "Quiet";
  }
  if (type == "middle") {
    userPreferences.quietNoise = "Both";
  }
  if (type == "left") {
    userPreferences.quietNoise = "Noise";
  }
}

function shortOptionClicked(event, options, type) {
  options.forEach( element => {
    element.classList.remove('options-buttons-clicked');
  });
  event.target.classList.add('options-buttons-clicked');
  if (type == "right") {
    userPreferences.distance = "< 10";
  }
  if (type == "middle") {
    userPreferences.distance = "Both";
  }
  if (type == "left") {
    userPreferences.distance = "> 10";
  }
}


function stemOptionClicked(event, options, type) {
  options.forEach( element => {
    element.classList.remove('options-buttons-clicked');
  });
  event.target.classList.add('options-buttons-clicked');
  if (type == "right") {
    userPreferences.type = "STEM";
  }
  if (type == "middle") {
    userPreferences.type = "Both";
  }
  if (type == "left") {
    userPreferences.type = "Humanities";
  }
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
        
        // console.log("CURSOR RECT: ", cursorRect);
        // Loop through all interactable elements in the page
        // Check to see if the cursor is interacting with element
        // If the cursor is ontop of element, start adding to counter
        // Once counter reaches 2 seconds (counter > 16)
        // Interact with the object, by clicking it
        elements.forEach( pair => {
          var rect1 = getElementPosition(pair.element);
          if (!isOverlap(rect1, cursorRect) || !isOverlap(cursorRect, rect1)) {
            console.log('got here')
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







// console.log(filteredSpots);