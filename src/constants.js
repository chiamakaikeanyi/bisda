const constants = {
  appName: 'Bisda',
  navigationMenu: [
    { id: 1, label: 'Listings', url: '/listings' },
    { id: 2, label: 'Sign In', url: '/sign-in' }
  ],
  imageEndpoint: 'https://placeimg.com/160/160/arch',
  listings: [
    {
      id: 1,
      name: 'Google',
      description: 'The micro service that returns information about places using HTTP requests.',
      phone: '+2340292020',
      email: 'info@google.com',
      website: 'https://www.google.com',
      categories: ['Technology', 'AI']
    },
    {
      id: 2,
      name: 'INITS',
      description: 'A service that returns information about places using HTTP requests.',
      phone: '+2330292020',
      email: 'info@inits.com',
      website: 'https://www.inits.com',
      categories: ['Website design', 'Software development']
    }
  ]
};

export default constants;
