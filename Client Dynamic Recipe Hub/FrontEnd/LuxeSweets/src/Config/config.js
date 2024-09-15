import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBBGnaIvCvRF4GpGVJlkOfhoVc0wZ01wEg",
  authDomain: "luxesweet.firebaseapp.com",
  projectId: "luxesweet",
  storageBucket: "luxesweet.appspot.com",
  messagingSenderId: "580070833826",
  appId: "1:580070833826:web:68eb95c86702e851b261fb",
  measurementId: "G-9HXEE9ERPH"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };