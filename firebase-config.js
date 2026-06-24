// Firebase Configuration
// STEP 1: Go to https://console.firebase.google.com/
// STEP 2: Create a new project (free Spark plan)
// STEP 3: Add a web app to your project
// STEP 4: Copy the config object from Firebase and paste it below
// STEP 5: Enable Anonymous Auth: Authentication → Sign-in method → Anonymous → Enable
// STEP 6: Enable Firestore: Firestore Database → Create database → Start in test mode
// STEP 7: Set Firestore rules (see README.md)

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// IMPORTANT: Replace the above with your actual Firebase config.
// The app will work in local-only mode (no sync) until you do this.
