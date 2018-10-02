import firebase from 'firebase/app';
import 'firebase/auth';

const projectId = process.env.REACT_APP_PROJECT_ID;

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    projectId,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID
};

firebase.initializeApp(config);

export default firebase;
