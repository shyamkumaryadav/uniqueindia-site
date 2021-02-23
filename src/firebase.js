import firebase from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyAG7v_Or3_xqywpYU3parl4vAdtKFKt4x0",
    authDomain: "uniqueindia289.firebaseapp.com",
    databaseURL: "https://uniqueindia289-default-rtdb.firebaseio.com",
    projectId: "uniqueindia289",
    storageBucket: "uniqueindia289.appspot.com",
    messagingSenderId: "933618094497",
    appId: "1:933618094497:web:a98cd03ea5a8ab4d51bbe0"
};

firebase.initializeApp(firebaseConfig);
export default firebase;