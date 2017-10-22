new SmartBanner({
  daysHidden: 15, // days to hide banner after close button is clicked (defaults to 15)
  daysReminder: 90, // days to hide banner after "VIEW" button is clicked (defaults to 90)
  appStoreLanguage: 'us', // language code for the App Store (defaults to user's browser language)
  title: 'Pubu eBook',
  author: 'NUAZURE Innovative Technology Co, Ltd',
  button: 'VIEW',
  store: {
    ios: 'On the App Store',
    android: 'In Google Play',
    windows: 'In Windows store'
  },
  price: {
    ios: 'FREE',
    android: 'FREE',
    windows: 'FREE'
  }
  // , theme: '' // put platform type ('ios', 'android', etc.) here to force single theme on all device
  // , icon: '' // full path to icon image if not using website icon image
  // , force: 'ios' // Uncomment for platform emulation
});