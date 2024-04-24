// python3 -m http.server 4444

// Host given by tutorial page, we are display 1
var host = "cpsc484-01.stdusr.yale.internal:8888";
var globalPersonID = 0;

$(document).ready(function() {
  frames.start();
});

const studySpots = [
  {
      location: 'AKW',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'STEM',
      description: 'At the AKW, you can find study spaces on the second and third floor.',
      gpsLink: 'https://maps.app.goo.gl/QuoYxYTTSKDZkV2d9',
      image: 'study_images/AKW.jpg',
      qr: 'qr_codes/AKW.png'
  },
  {
      location: 'Sterling Library',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: 'There are many spaces for you to study at Sterling Library, from the stacks to L&B reading room.',
      gpsLink: 'https://maps.app.goo.gl/2FFbyn19ZPCYqqm28',
      image: 'study_images/Sterling.jpg',
      qr: 'qr_codes/Sterling.png'
  },
  {
      location: 'Med School Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'STEM',
      description: 'The Med School Library provides a quiet, resource-rich environment tailored for medical students and those studying life sciences.',
      gpsLink: 'https://maps.app.goo.gl/Tptd4BpT4BqKE9xF9',
      image: 'study_images/med_school.jpg',
      qr: 'qr_codes/MedSchool.png'
  },
  {
      location: 'Yale School of Management',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'Both',
      description: 'SOM offers modern study spaces that cater to both quiet study and group discussions, set in a contemporary setting.',
      gpsLink: 'https://maps.app.goo.gl/zGB6V1eL9Yvjbzx59',
      image: 'study_images/SOM.jpg',
      qr: 'qr_codes/SOM.png'
  },
  {
      location: 'Pierson Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: 'Pierson Library provides a tranquil environment with its classic decor and quiet study areas, perfect for deep focus.',
      gpsLink: 'https://maps.app.goo.gl/9VwWyzQD6hMg5gUKA',
      image: 'study_images/Pierson.jpg',
      qr: 'qr_codes/Pierson.png'
  },
  {
      location: 'CEID',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'STEM',
      description: 'The Center for Engineering Innovation & Design (CEID) supports creative and collaborative projects with its versatile workspaces and tech resources.',
      gpsLink: 'https://maps.app.goo.gl/yDErt74DSHTmasUW8',
      image: 'study_images/CEID.jpg',
      qr: 'qr_codes/CEID.png'
  },
  {
      location: 'Cross Campus',
      distance: '< 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: 'Cross Campus is an energetic, open space perfect for those who enjoy studying outdoors with the vibrant background noise of campus life.',
      gpsLink: 'https://maps.app.goo.gl/roooEC7NTGSjvqAg6',
      image: 'study_images/CrossCampus.jpg',
      qr: 'qr_codes/CrossCampus.png'
  },
  {
      location: 'Atticus Coffee',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'Both',
      description: 'Atticus Coffee offers a cozy, book-lined space that combines the aroma of coffee with a comfortable, mildly bustling atmosphere.',
      gpsLink: 'https://maps.app.goo.gl/b2GsN9RWoEGtNEWP9',
      image: 'study_images/Atticus.jpg',
      qr: 'qr_codes/Atticus.png'
  },
  {
      location: 'Yale Art Gallery',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: 'The YUAG provides a contemplative environment surrounded by inspiring artworks, ideal for humanities students or those seeking creative inspiration.',
      gpsLink: 'https://maps.app.goo.gl/zM2gofzvwGxkXLM77',
      image: 'study_images/YUAG.jpg',
      qr: 'qr_codes/YUAG.png'
  },
  {
      location: 'Classics Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: 'Above Phelps Gate, the Classics Library is a haven for scholars, offering a serene study environment amidst ancient texts.',
      gpsLink: 'https://maps.app.goo.gl/9vRDQudXvtmqwCKT8',
      image: 'study_images/Classics.jpg',
      qr: 'qr_codes/Classics.png'
  },
  {
      location: 'Bass Library',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: 'Bass Library offers a centrally-located study space with comfortable seating and a quiet atmosphere, perfect for long study sessions.',
      gpsLink: 'https://maps.app.goo.gl/U8AFXByagkTyqMKB9',
      image: 'study_images/Bass.jpg',
      qr: 'qr_codes/Bass.png'
  },
  {
      location: 'Marx Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: 'Located up science hill, Marx Library provides a quiet, focused environment suitable for students from all disciplines.',
      gpsLink: 'https://maps.app.goo.gl/mH2q4y1bLDkU4dLh7',
      image: 'study_images/Marx.jpg',
      qr: 'qr_codes/Marx.png'
  },
  {
      location: 'Trumbull Buttery',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: 'Trumbull Buttery is known for its relaxed, café-style atmosphere, making it a favorite for students who prefer a lively background noise while studying.',
      gpsLink: 'https://maps.app.goo.gl/9AdZYWyydudApLkQA',
      image: 'study_images/TrumbullButtery.jpg',
      qr: 'qr_codes/Trumbull.png'
  },
  {
      location: 'Donut Crazy',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: 'Donut Krazy combines delicious treats with a casual study atmosphere, ideal for group meetings or when you need a sugar boost while studying.',
      gpsLink: 'https://maps.app.goo.gl/cdCJzqajq33K5hTj9',
      image: 'study_images/DonutKrazy.jpg',
      qr: 'qr_codes/DonutCrazy.png'
  },
  {
      location: 'Pauli Murray Common Room',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: 'The Pauli Murray Common Room offers a vibrant community space that encourages both academic and social interactions among students.',
      gpsLink: 'https://maps.app.goo.gl/g65baWzHhob1VLWNA',
      image: 'study_images/PauliMurray.jpg',
      qr: 'qr_codes/Pauli.png'
  },
  {
      location: 'Benches by Ingalls Rink',
      distance: '< 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: 'The benches by Ingalls Rink provide a peaceful outdoor setting at the bottom of science hill, perfect for reading or quiet reflection.',
      gpsLink: 'https://maps.app.goo.gl/T9nxU6v3AZnPsuy56',
      image: 'study_images/Ingalls.jpg',
      qr: 'qr_codes/Ingalls.png'
  },
  {
      location: 'Good Life Center',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: 'The Good Life Center is designed for wellness and relaxation, offering a calm environment that promotes stress-free studying.',
      gpsLink: 'https://maps.app.goo.gl/oPHtkqxR1cdu1JTg7',
      image: 'study_images/GoodLifeCenter.jpg',
      qr: 'qr_codes/GoodLife.png'
  },
  {
      location: 'Beinecke Plaza',
      distance: '< 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: 'Beinecke Plaza is an iconic outdoor space, surrounded by unique architectural marvels, suitable for those who enjoy studying in a dynamic environment.',
      gpsLink: 'https://maps.app.goo.gl/4vxXhNnySkvPYWFW9',
      image: 'study_images/BeineckePlaza.jpg',
      qr: 'qr_codes/BeineckePlaza.png'
  },
  {
      location: 'Old Campus Courtyard',
      distance: '> 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: 'Old Campus Courtyard is at the heart of Yale, a traditional spot for students to gather, study, or unwind between classes.',
      gpsLink: 'https://maps.app.goo.gl/iigZseK36HTpgCxWA',
      image: 'study_images/OldCampus.jpg',
      qr: 'qr_codes/OldCampus.png'
  },
  {
      location: 'William L. Harkness Hall',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Both',
      type: 'Both',
      description: 'WLH offers versatile classroom spaces that transform into quiet study areas after hours, suitable for individual or group study.',
      gpsLink: 'https://maps.app.goo.gl/puctpKikT7j9YfbcA',
      image: 'study_images/WLH.jpg',
      qr: 'qr_codes/WLH.png'
  },
  {
      location: 'Humanities Quadrangle',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: 'HQ is a newly renovated space offering a serene environment focused on humanities studies, with quiet corners perfect for scholars.',
      gpsLink: 'https://maps.app.goo.gl/m6Rok2PeNLScWt5n9',
      image: 'study_images/hq.jpg',
      qr: 'qr_codes/HQ.png'
  },
  {
      location: 'Davenport Courtyard',
      distance: '> 10',
      inOutdoor: 'Outdoor',
      quietNoise: 'Both',
      type: 'Both',
      description: 'Davenport Courtyard is a picturesque outdoor area ideal for studying in the open air, offering a blend of quiet spots and social spaces.',
      gpsLink: 'https://maps.app.goo.gl/C7q6o6WqZHNyy5Qb6',
      image: 'study_images/Davenport.jpg',
      qr: 'qr_codes/Davenport.png'
  },
  {
      location: 'Loose Leaf Cafe',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: 'Loose Leaf Cafe is perfect for those who prefer a bustling café vibe, offering great coffee and a lively atmosphere for studying or collaborative projects.',
      gpsLink: 'https://maps.app.goo.gl/YPNB7kg2NTua4Wdg6',
      image: 'study_images/LooseLeaf.jpg',
      qr: 'qr_codes/LooseLeaf.png'
  },
  {
      location: 'Willoughbys',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: 'Willoughbys provides a classic coffee shop experience with its strong brews and bustling environment, ideal for those who thrive in active settings.',
      gpsLink: 'https://maps.app.goo.gl/Ek3Fzr7TJx9kRzj79',
      image: 'study_images/Willoughby.jpg',
      qr: 'qr_codes/Willoughby.png'
  },
  {
      location: 'The Whale Tea',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Noise',
      type: 'Both',
      description: 'The Whale Tea offers a trendy spot for bubble tea lovers to sip and study, with a lively atmosphere that is great for group study sessions.',
      gpsLink: 'https://maps.app.goo.gl/UtShmj1tFZDuta249',
      image: 'study_images/whaletea.jpg',
      qr: 'qr_codes/WhaleTea.png'
  },
  {
      location: 'Law Library',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: 'The Law Library is a prestigious and solemn place for deep academic work, renowned for its extensive legal collections and stately ambiance.',
      gpsLink: 'https://maps.app.goo.gl/yoxPDbfgwc32wPQz7',
      image: 'study_images/LawLibrary.jpg',
      qr: 'qr_codes/Law.png'
  },
  {
      location: 'Haas Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: 'Haas Library stands out with its focus on arts and humanities, offering a quiet retreat for students immersed in cultural studies and artistic exploration.',
      gpsLink: 'https://maps.app.goo.gl/8ZgawCREGWcMm39n9',
      image: 'study_images/HaasLibrary.jpg',
      qr: 'qr_codes/Haas.png'
  },
  {
      location: 'School of Architecture Library',
      distance: '> 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Humanities',
      description: 'The School of Architecture Library caters to design students, featuring a wide range of architectural resources in a quiet, inspiring environment.',
      gpsLink: 'https://maps.app.goo.gl/k1SgNW2tDU4abbih8',
      image: 'study_images/SchoolofArchitecture.jpg',
      qr: 'qr_codes/Architecture.png'
  },
  {
      location: 'Rosenfeld Hall',
      distance: '< 10',
      inOutdoor: 'Indoor',
      quietNoise: 'Quiet',
      type: 'Both',
      description: 'Rosenfeld Hall is a hidden gem on campus offering a peaceful study environment with spacious rooms that are perfect for students seeking a quiet and secluded place to focus.',
      gpsLink: 'https://maps.app.goo.gl/k1SgNW2tDU4abbih8',
      image: 'study_images/RosenfeldHall.jpg',
      qr: 'qr_codes/Rosenfeld.png'
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

function resetCounter(button) {
  var blah = 0;
  elements.forEach(function(pair, i) {
    if (pair.element == button) {
      blah = i;
    }
  });
  elements[blah].counter = 0;
}

function handleLeftButtonClick(spots) {
  var index = parseInt(localStorage.getItem("recIndex"));
  localStorage.setItem('recIndex', index-1);
  displayRecommendation(spots);
  resetCounter(goLeftButton);
}

function handleRightButtonClick(spots) {
  var index = parseInt(localStorage.getItem("recIndex"));
  localStorage.setItem('recIndex', index+1);
  displayRecommendation(spots);
  resetCounter(goRightButton);
}

function displayRecommendation(spots) {
  var index = parseInt(localStorage.getItem("recIndex"));
  document.getElementById('study-spot-image').src = spots[index].image;
  document.getElementById('study-spot-name').innerText = spots[index].location;
  document.getElementById('study-spot-description').innerText = spots[index].description;
  document.getElementById('study-spot-directions').src = spots[index].qr;
  document.getElementById('study-spot-number').innerText = index+1 + " out of " + spots.length;
  var goLeftButton = document.getElementById('go-left');
  var goRightButton = document.getElementById('go-right');
  if (index == 0) {
    goLeftButton.style.display="none";
  } else {
    goLeftButton.style.display="block";
  }
  if (index == spots.length - 1) {
    goRightButton.style.display="none";
  } else {
    goRightButton.style.display="block";
  }
}



var elements = [];

// Add all interactable elements of specific window
// (and their counters) to the elements array

if (window.location.pathname.includes('/index.html')) {
  var startButton = document.getElementById('start-button');
  startButton.style.display = "none";
  startButton.addEventListener('click', startButtonClick);
  elements.push({element:startButton, counter:0});
}

if (window.location.pathname.includes('/help.html')) {
  var goBackButton = document.getElementById('go-back-help');
  goBackButton.addEventListener('click', startButtonClick);
  elements.push({element:goBackButton, counter:0});
}


if (window.location.pathname.includes('/preferences.html')) {
  //Defualts to no preferences, which essentially is both
  var storedPreferences = localStorage.getItem('userPreferences');
  // console.log(storedPreferences)
  if (storedPreferences == "undefined" || storedPreferences == null) {
    window.userPreferences =
    {
      distance: 'Both',
      inOutdoor: 'Both',
      quietNoise: 'Both',
      type: 'Both'
    };
  } else {
    console.log(JSON.parse(storedPreferences));
    window.userPreferences = JSON.parse(storedPreferences);
  }

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
    stemOptionClicked(event, stemOptions, "right");
  });
  stemNoPreferenceButton.addEventListener('click', function(event) {
    stemOptionClicked(event, stemOptions, "middle");
  });
  humanitiesButton.addEventListener('click', function(event) {
    stemOptionClicked(event, stemOptions, "left");
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

  clickPreferences();

}

function clickPreferences() {
  if (window.userPreferences.distance == 'Both') {
    shortNoPreferenceButton.click();
  } else if (window.userPreferences.distance == '< 10') {
    shortButton.click();
  } else if (window.userPreferences.distance == '> 10') {
    longButton.click();
  }

  if (window.userPreferences.inOutdoor == 'Both') {
    indoorNoPreference.click();
  } else if (window.userPreferences.inOutdoor == 'Indoor') {
    indoorButton.click();
  } else if (window.userPreferences.inOutdoor == 'Outdoor') {
    outdoorButton.click();
  }

  if (window.userPreferences.quietNoise == 'Both') {
    quietNoPreferenceButton.click();
  } else if (window.userPreferences.quietNoise == 'Quiet') {
    quietButton.click();
  } else if (window.userPreferences.quietNoise == 'Noise') {
    noiseButton.click();
  }

  if (window.userPreferences.type == 'Both') {
    stemNoPreferenceButton.click();
  } else if (window.userPreferences.type == 'STEM') {
    stemButton.click();
  } else if (window.userPreferences.type == 'Humanities') {
    humanitiesButton.click();
  }
}

if (window.location.pathname.includes('/loading.html')) {
  displayStoredPreferences();
  var startOverButton = document.getElementById('start-over-button');
  var helpButton = document.getElementById('help-button');
  var goBackButton = document.getElementById('go-back-button');
  startOverButton.addEventListener('click', startOverButtonClick);
  helpButton.addEventListener('click', helpButtonClick);
  goBackButton.addEventListener('click', startButtonClick);
  elements.push({element:startOverButton, counter:0});
  elements.push({element:helpButton, counter:0});
  elements.push({element:goBackButton, counter:0});
  setTimeout(() => {window.location = "./recommendation.html"}, 2000);
}

function displayStoredPreferences() {
  const preferences = JSON.parse(localStorage.getItem('userPreferences'));
  if (preferences) {
      document.getElementById('location-preference').textContent = `Location: ${preferences.inOutdoor || 'No preference'}`;
      document.getElementById('distance-preference').textContent = `Distance: ${preferences.distance || 'No preference'}`;
      document.getElementById('noise-preference').textContent = `Noise Level: ${preferences.quietNoise || 'No preference'}`;
      document.getElementById('type-preference').textContent = `Study Type: ${preferences.type || 'No preference'}`;
  }
}

if (window.location.pathname.includes('/recommendation.html')) {
  const preferences = JSON.parse(localStorage.getItem('userPreferences'));
  filteredSpots = filterStudySpots(preferences);
  localStorage.setItem('recIndex', 0);

  const recommendationContainer = document.getElementById('recommendation-container');
  const noSpotsMessage = document.getElementById('no-spots');
  const goLeftButton = document.getElementById('go-left');
  const goRightButton = document.getElementById('go-right');

  if (filteredSpots.length == 0) {
    console.log('NO STUDY SPACES FOUND');
    recommendationContainer.style.display = "none";
    goLeftButton.style.display = "none";
    goRightButton.style.display = "none";
    noSpotsMessage.style.display = "flex";
    noSpotsMessage.innerText = "Sorry, no study spaces found with your preferences. Try going back and adjusting your preferences for results!";
    noSpotsMessage.style.display = "flex";

  } else if (filteredSpots.length > 0) {
    recommendationContainer.style.display = "flex";
    goLeftButton.style.display = "block";
    goRightButton.style.display = "block";
    noSpotsMessage.style.display = "none";
    goLeftButton.addEventListener('click', function(event) {
      handleLeftButtonClick(filteredSpots)
    });
    goRightButton.addEventListener('click', function(event) {
      handleRightButtonClick(filteredSpots)
    });
    displayRecommendation(filteredSpots);

  }
  var startOverButton = document.getElementById('start-over-button');
  var helpButton = document.getElementById('help-button');
  var goBackButton = document.getElementById('go-back-button');
  startOverButton.addEventListener('click', startOverButtonClick);
  helpButton.addEventListener('click', helpButtonClick);
  goBackButton.addEventListener('click', startButtonClick);
  elements.push({element:startOverButton, counter:0});
  elements.push({element:helpButton, counter:0});
  elements.push({element:goBackButton, counter:0});
  elements.push({element:goLeftButton, counter:0});
  elements.push({element:goRightButton, counter:0});
  
}

function indoorOptionClicked(event, options, type) {
  options.forEach( element => {
    element.classList.remove('options-buttons-clicked');
  });
  event.target.classList.add('options-buttons-clicked');
  if (type == "right") {
    window.userPreferences.inOutdoor = "Indoor";
  }
  if (type == "middle") {
    window.userPreferences.inOutdoor = "Both";
  }
  if (type == "left") {
    window.userPreferences.inOutdoor = "Outdoor";
  }
}

function quietOptionClicked(event, options, type) {
  options.forEach( element => {
    element.classList.remove('options-buttons-clicked');
  });
  event.target.classList.add('options-buttons-clicked');
  if (type == "right") {
    window.userPreferences.quietNoise = "Quiet";
  }
  if (type == "middle") {
    window.userPreferences.quietNoise = "Both";
  }
  if (type == "left") {
    window.userPreferences.quietNoise = "Noise";
  }
}

function shortOptionClicked(event, options, type) {
  options.forEach( element => {
    element.classList.remove('options-buttons-clicked');
  });
  event.target.classList.add('options-buttons-clicked');
  if (type == "right") {
    window.userPreferences.distance = "< 10";
  }
  if (type == "middle") {
    window.userPreferences.distance = "Both";
  }
  if (type == "left") {
    window.userPreferences.distance = "> 10";
  }
}


function stemOptionClicked(event, options, type) {
  options.forEach( element => {
    element.classList.remove('options-buttons-clicked');
  });
  event.target.classList.add('options-buttons-clicked');
  if (type == "right") {
    window.userPreferences.type = "STEM";
  }
  if (type == "middle") {
    window.userPreferences.type = "Both";
  }
  if (type == "left") {
    window.userPreferences.type = "Humanities";
  }
}

function startButtonClick() {
  window.location = "./preferences.html";
}

function startOverButtonClick() {
  localStorage.clear();
  window.location = "./index.html";
}

function searchButtonClick() {
  localStorage.setItem('userPreferences', JSON.stringify(window.userPreferences));
  window.location = "./loading.html";
}

function helpButtonClick() {
  window.location = "./help.html";
}




// This function will return the top, bottom, left, right x, y positions of given element
function getElementPosition(el) {
  var rect = el.getBoundingClientRect();
  return rect;
}

// This function will return true if the given elements overlap
function isOverlap(rect1, rect2) {
  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
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
      if (command !== null && !window.location.pathname.includes('/index.html')) {
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
          if (isOverlap(rect1, cursorRect) || isOverlap(cursorRect, rect1)) {
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
            pair.counter = 0;
            pair.element.classList.remove('hovering');
            pair.element.click();
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


    
    if (window.location.pathname.includes('/index.html')) {
      frame.people.forEach( person => {
        var headY = person.joints[26].position.y;
        var rightHandY = person.joints[15].position.y;
        if (rightHandY < headY) {
          globalPersonID = person.body_id;
          localStorage.setItem('personID', globalPersonID);
          console.log("personid: ", localStorage.getItem('personID'))
          startButtonClick();
        }
      });
    } else {
          // Adjust these offset values to position the cursor correctly on your screen
        var offsetX = 200;
        var offsetY = 200;
        var correctionFactorX = 25;
        var correctionFactorY = 35;

        var screenWidth = window.innerWidth;
        var screenHeight = window.innerHeight;

        // var personAppearsIndex = 0;
        var personAppearsIndex = frame.people.map(function(x) {return x.body_id.toString(); }).indexOf(localStorage.getItem('personID'))
        if (personAppearsIndex < 0) {
          personAppearsIndex = 0; 
        }
        // console.log(personAppearsIndex)
        // frame.people.forEach( function(person, i) {
        //   if (person.body_id == localStorage.getItem('personID')) {
        //     // console.log("got here")
        //     personAppearsIndex = i;
        //   } else {
        //     console.log("COULDN'T FIND OG PERSON?")
        //   }
        // });

        
        // if (frame.people.length > 1) {
        //   // console.log("got here! Index: ", personAppearsIndex)
        // }

        var right_hand_x = (frame.people[personAppearsIndex].joints[15].position.x * -2) + offsetX;
        var right_hand_y = frame.people[personAppearsIndex].joints[15].position.y + offsetY;

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
    }

    
};







// console.log(filteredSpots);
