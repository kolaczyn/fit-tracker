import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBE1RjeM1Ub15VzGIZqRD_yUZE5o743vGo',
  authDomain: 'track-fit-48b1b.firebaseapp.com',
  projectId: 'track-fit-48b1b',
  storageBucket: 'track-fit-48b1b.appspot.com',
  messagingSenderId: '127370303503',
  appId: '1:127370303503:web:2653d57f5db75c62fd2b7a',
};

// we write !firebase.apps.length to make sure we init the app only once
!firebase.apps.length && firebase.initializeApp(firebaseConfig);
export default firebase;
export const auth = firebase.auth();
