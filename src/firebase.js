/* eslint-disable no-unused-vars */
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyC-kUua8kqwitC1mB47pZNJLk-JHpGB7CU",
    authDomain: "clone-dito.firebaseapp.com",
    projectId: "clone-dito",
    storageBucket: "clone-dito.appspot.com",
    messagingSenderId: "707212966475",
    appId: "1:707212966475:web:961829a9a0066cad2a2bce",
    measurementId: "G-THLSD4GR40"
});

const auth = firebase.auth();

export { auth };