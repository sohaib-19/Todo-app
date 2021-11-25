import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDqN96Y5gy3gsALv10nG_kx4HNTjMF7hcI",
    authDomain: "todo-app-3b39a.firebaseapp.com",
    databaseURL: "https://todo-app-3b39a-default-rtdb.firebaseio.com",
    projectId: "todo-app-3b39a",
    storageBucket: "todo-app-3b39a.appspot.com",
    messagingSenderId: "736636300485",
    appId: "1:736636300485:web:355d7182806f0548e7d4ac",
    measurementId: "G-MHDTDJ8XCV"
};

firebase.initializeApp(firebaseConfig)

export default firebase;