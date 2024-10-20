import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDtG4O345Ty5Jx8jqt9fB797aNUjIODsQE",
  authDomain: "smtpb7-31b71.firebaseapp.com",
  projectId: "smtpb7-31b71",
  storageBucket: "smtpb7-31b71.appspot.com",
  messagingSenderId: "407963797495",
  appId: "1:407963797495:web:734f81bad0aab9af1ad0f2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);