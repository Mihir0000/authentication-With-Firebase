import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyD4YW37rDoEMGgtB9iw_SjWxi1yl2LIK7A',
    authDomain: 'auth-development-f6a29.firebaseapp.com',
    projectId: 'auth-development-f6a29',
    storageBucket: 'auth-development-f6a29.appspot.com',
    messagingSenderId: '1093430356196',
    appId: '1:1093430356196:web:d12e8d1bae4d2d3f0164f1',
});

export const auth = app.auth();
export default app;
