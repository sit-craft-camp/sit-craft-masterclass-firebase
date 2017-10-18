export default async function fb() {
  const firebase = await import('firebase')

  const config = {
    apiKey: "AIzaSyDajr4CSA17F6UMGHgJudrKkd_QupzkVD4",
    authDomain: "sit-craft-masterclass-firebase.firebaseapp.com",
    databaseURL: "https://sit-craft-masterclass-firebase.firebaseio.com",
    projectId: "sit-craft-masterclass-firebase",
    storageBucket: "",
    messagingSenderId: "697825638118"
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
