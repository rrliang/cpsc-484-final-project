const studySpots = [
    {
        location: 'AKW',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Both',
        type: 'STEM',
        description: 'At the AKW, you can find study spaces on the second and third floor.',
        gpsLink: 'https://maps.app.goo.gl/QuoYxYTTSKDZkV2d9'
    },
    {
        location: 'Sterling Library',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/2FFbyn19ZPCYqqm28'
    },
    {
        location: 'Med School Library',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'STEM',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/Tptd4BpT4BqKE9xF9'
    },
    {
        location: 'Yale SOM',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Both',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/zGB6V1eL9Yvjbzx59'
    },
    {
        location: 'Pierson Library',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/9VwWyzQD6hMg5gUKA'
    },
    {
        location: 'CEID',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Both',
        type: 'STEM',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/yDErt74DSHTmasUW8'
    },
    {
        location: 'Cross Campus',
        distance: '< 10',
        inOutdoor: 'Outdoor',
        quietNoise: 'Noise',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/JVriypGNb6D3pgb87'
    },
    {
        location: 'Atticus Coffee',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Both',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/b2GsN9RWoEGtNEWP9'
    },
    {
        location: 'Yale Art Gallery',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Humanities',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/zM2gofzvwGxkXLM77'
    },
    {
        location: 'Classics Library',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Humanities',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/9vRDQudXvtmqwCKT8'
    },
    {
        location: 'Bass Library',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/b2GsN9RWoEGtNEWP9'
    },
    {
        location: 'Marx Library',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/mH2q4y1bLDkU4dLh7'
    },
    {
        location: 'Trumbull Buttery',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Noise',
        type: 'Both',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/9AdZYWyydudApLkQA'
    },
    {
        location: 'Donut Krazy',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Noise',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/A85N4dAuYxLJwgMx6'
    },
    {
        location: 'Pauli Murray Common Room',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Noise',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/g65baWzHhob1VLWNA'
    },
    {
        location: 'Benches by Ingalls Rink',
        distance: '< 10',
        inOutdoor: 'Outdoor',
        quietNoise: 'Quiet',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/T9nxU6v3AZnPsuy56'
    },
    {
        location: 'Good Life Center',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/oPHtkqxR1cdu1JTg7'
    },
    {
        location: 'Beinecke Plaza',
        distance: '< 10',
        inOutdoor: 'Outdoor',
        quietNoise: 'Noise',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/4vxXhNnySkvPYWFW9'
    },
    {
        location: 'Old Campus Courtyard',
        distance: '> 10',
        inOutdoor: 'Outdoor',
        quietNoise: 'Noise',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/iigZseK36HTpgCxWA'
    },
    {
        location: 'William L. Harkness Hall',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Both',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/puctpKikT7j9YfbcA'
    },
    {
        location: 'Humanities Quadrangle',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Humanities',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/m6Rok2PeNLScWt5n9'
    },
    {
        location: 'Davenport Courtyard',
        distance: '> 10',
        inOutdoor: 'Outdoor',
        quietNoise: 'Both',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/C7q6o6WqZHNyy5Qb6'
    },
    {
        location: 'Loose Leaf Cafe',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Noise',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/YPNB7kg2NTua4Wdg6'
    },
    {
        location: 'Willoughbys',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Noise',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/Ek3Fzr7TJx9kRzj79'
    },
    {
        location: 'The Whale Tea',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Noise',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/UtShmj1tFZDuta249'
    },
    {
        location: 'Law Library',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Humanities',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/yoxPDbfgwc32wPQz7'
    },
    {
        location: 'Haas Library',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Humanities',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/8ZgawCREGWcMm39n9'
    },
    {
        location: 'School of Architecture Library',
        distance: '> 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Humanities',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/k1SgNW2tDU4abbih8'
    },
    {
        location: 'Rosenfeld Hall',
        distance: '< 10',
        inOutdoor: 'Indoor',
        quietNoise: 'Quiet',
        type: 'Both',
        description: '',
        gpsLink: 'https://maps.app.goo.gl/k1SgNW2tDU4abbih8'
    }
];


const userPreferences = {
    distance: '< 10',
    inOutdoor: 'Indoor',
    quietNoise: 'Quiet',
    type: 'Both'
  };
  
  
  function filterStudySpots(preferences) {
    return studySpots.filter(spot => {
        return (preferences.distance === spot.distance || preferences.distance === 'Both') &&
               (preferences.inOutdoor === spot.inOutdoor || preferences.inOutdoor === 'Both') &&
               (preferences.quietNoise === spot.quietNoise || preferences.quietNoise === 'Both') &&
               (preferences.type === spot.type || preferences.type === 'Both');
    });
  }
  
  const filteredSpots = filterStudySpots(userPreferences);
  
  console.log(filteredSpots);