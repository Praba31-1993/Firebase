import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyClcs0s58qNSoQTjFkp04ITyGId0z5D1RA",
  authDomain: "loginpage-3d985.firebaseapp.com",
  projectId: "loginpage-3d985",
  storageBucket: "loginpage-3d985.appspot.com",
  messagingSenderId: "555822052038",
  appId: "1:555822052038:web:86f7f9891c826880b79dc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
