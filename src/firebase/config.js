import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: "eshop-82e00.firebaseapp.com",
    projectId: "eshop-82e00",
    storageBucket: "eshop-82e00.appspot.com",
    messagingSenderId: "1062365918695",
    appId: "1:1062365918695:web:d8397d969a65fd48887942"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;