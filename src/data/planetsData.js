export const planetsData = [
  {
    name: 'Mercury',
    color: '#8C7853',
    size: 8,
    distance: 80,
    orbitSpeed: 4.74,
    rotationSpeed: 58.6,
    description: 'The smallest planet and closest to the Sun.',
    facts: [
      'One day on Mercury lasts 59 Earth days',
      'Surface temperature ranges from -173°C to 427°C',
      'Has no atmosphere to retain heat'
    ],
    moons: 0,
    moonData: []
  },
  {
    name: 'Venus',
    color: '#FFC649',
    size: 14,
    distance: 130,
    orbitSpeed: 3.50,
    rotationSpeed: -243,
    description: 'The hottest planet in our solar system.',
    facts: [
      'Rotates in the opposite direction to most planets',
      'A day on Venus is longer than its year',
      'Has a thick, toxic atmosphere'
    ],
    moons: 0,
    moonData: []
  },
  {
    name: 'Earth',
    color: '#4A90E2',
    size: 16,
    distance: 190,
    orbitSpeed: 2.98,
    rotationSpeed: 1,
    description: 'Our home planet, the only known planet with life.',
    facts: [
      '71% of Earth\'s surface is covered by water',
      'Has one natural satellite: the Moon',
      'The only planet not named after a god'
    ],
    moons: 1,
    moonData: [
      { name: 'Moon', size: 4, distance: 25, speed: 2.5, color: '#C0C0C0' }
    ]
  },
  {
    name: 'Mars',
    color: '#E27B58',
    size: 12,
    distance: 250,
    orbitSpeed: 2.41,
    rotationSpeed: 1.03,
    description: 'The Red Planet, a cold desert world.',
    facts: [
      'Home to the largest volcano in the solar system',
      'Has two small moons: Phobos and Deimos',
      'A day on Mars is 24.6 hours'
    ],
    moons: 2,
    moonData: [
      { name: 'Phobos', size: 2.5, distance: 18, speed: 3.2, color: '#8B7355' },
      { name: 'Deimos', size: 2, distance: 28, speed: 2.0, color: '#9B8365' }
    ]
  },
  {
    name: 'Jupiter',
    color: '#C88B3A',
    size: 40,
    distance: 350,
    orbitSpeed: 1.31,
    rotationSpeed: 0.41,
    description: 'The largest planet in our solar system.',
    facts: [
      'Has a giant storm called the Great Red Spot',
      'Has 95 known moons',
      'Could fit all other planets inside it'
    ],
    moons: 95,
    moonData: [
      { name: 'Io', size: 4, distance: 55, speed: 3.5, color: '#F4C542' },
      { name: 'Europa', size: 3.5, distance: 65, speed: 2.8, color: '#D4E8E8' },
      { name: 'Ganymede', size: 5, distance: 75, speed: 2.2, color: '#8B7D6B' },
      { name: 'Callisto', size: 4.5, distance: 85, speed: 1.8, color: '#6B5D52' }
    ]
  },
  {
    name: 'Saturn',
    color: '#FAD5A5',
    size: 36,
    distance: 470,
    orbitSpeed: 0.97,
    rotationSpeed: 0.45,
    description: 'Famous for its spectacular ring system.',
    facts: [
      'Has the most extensive ring system',
      'Has 146 known moons',
      'Least dense planet - would float in water'
    ],
    moons: 146,
    hasRings: true,
    moonData: [
      { name: 'Titan', size: 5, distance: 60, speed: 2.5, color: '#FFA500' },
      { name: 'Rhea', size: 3, distance: 70, speed: 2.0, color: '#E8E8E8' },
      { name: 'Iapetus', size: 3, distance: 80, speed: 1.6, color: '#A9A9A9' }
    ]
  },
  {
    name: 'Uranus',
    color: '#4FD0E7',
    size: 28,
    distance: 580,
    orbitSpeed: 0.68,
    rotationSpeed: -0.72,
    description: 'An ice giant that rotates on its side.',
    facts: [
      'Rotates on its side at 98 degrees',
      'Has 27 known moons',
      'Coldest planetary atmosphere in solar system'
    ],
    moons: 27,
    moonData: [
      { name: 'Titania', size: 3.5, distance: 50, speed: 2.3, color: '#B0C4DE' },
      { name: 'Oberon', size: 3.5, distance: 60, speed: 1.9, color: '#9CB4C8' }
    ]
  },
  {
    name: 'Neptune',
    color: '#4166F5',
    size: 28,
    distance: 680,
    orbitSpeed: 0.54,
    rotationSpeed: 0.67,
    description: 'The windiest planet in our solar system.',
    facts: [
      'Has the strongest winds in the solar system',
      'Has 16 known moons',
      'Takes 165 Earth years to orbit the Sun'
    ],
    moons: 16,
    moonData: [
      { name: 'Triton', size: 4, distance: 50, speed: -2.8, color: '#FFFAFA' }
    ]
  }
]
