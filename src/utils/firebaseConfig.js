import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD37PdhBoURvqtMPliuGC3N0b3L8d6EUCg",
  authDomain: "sahabat-setia.firebaseapp.com",
  databaseURL: "https://sahabat-setia.firebaseio.com",
  projectId: "sahabat-setia",
  storageBucket: "sahabat-setia.appspot.com",
  messagingSenderId: "915356710291",
  appId: "1:915356710291:web:f554ec08108007a0fa2466",
  measurementId: "G-JX3WFQNVMJ"
};

export const firebaseProject = firebase.initializeApp(firebaseConfig)
export const firebaseDB = firebase.database()
