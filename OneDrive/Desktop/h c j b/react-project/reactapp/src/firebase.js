import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';





const firebaseConfig = {
    apiKey: "AIzaSyBwKv3JY50WxJDRgbFVmmtztTjITs2_cw8",
  authDomain: "react-otp-1d966.firebaseapp.com",
  projectId: "react-otp-1d966",
  storageBucket: "react-otp-1d966.appspot.com",
  messagingSenderId: "24224266613",
  appId: "1:24224266613:web:2d69150c5f9a0563a4fb3c"
  }


  firebase.initializeApp(firebaseConfig);
  export default firebase

