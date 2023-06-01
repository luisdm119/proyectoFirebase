// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeuOSlwgHZ_zf4qbb2pnR_mupBXIAQfMw",
  authDomain: "projectfirebase-cab5f.firebaseapp.com",
  projectId: "projectfirebase-cab5f",
  storageBucket: "projectfirebase-cab5f.appspot.com",
  messagingSenderId: "446601341509",
  appId: "1:446601341509:web:6f18ed83592c4d5be5512c"
};


firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const auth = firebase.auth();

export {auth}
//initializeApp(firebaseConfig);