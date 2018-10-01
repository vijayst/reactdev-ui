import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCXXxfqYFLUeM7w6WxOp5XyaZ2AqZteTFU',
    authDomain: 'reactdev-1e1ea.firebaseapp.com',
    databaseURL: 'https://reactdev-1e1ea.firebaseio.com',
    projectId: 'reactdev-1e1ea',
    storageBucket: 'reactdev-1e1ea.appspot.com',
    messagingSenderId: '82202531094'
};

firebase.initializeApp(config);

export default firebase;
