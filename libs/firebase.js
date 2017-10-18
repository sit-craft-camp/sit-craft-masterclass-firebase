export default async function firebase() {
  const firebase = await import('firebase')

  const config = {
    apiKey: '-----------------------------',
    authDomain: '-----------------------------',
    databaseURL: '-----------------------------',
    projectId: '-----------------------------',
    storageBucket: '-----------------------------',
    messagingSenderId: '-----------------------------'
  }

  try {
    firebase.initializeApp(config)
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }

  return firebase
}
