// * firebase 프로젝 설정에서 가져옴

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCINKZ5MJt_OIdXu7r5GeM8KTiWe_tquNA",
    authDomain: "fir-3a222.firebaseapp.com",
    projectId: "fir-3a222",
    storageBucket: "fir-3a222.appspot.com",
    messagingSenderId: "29864659648",
    appId: "1:29864659648:web:a43ea3c1dd5088ad1b3b25",
    measurementId: "G-9CM5VJTYP7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // export 앞에 추가 (외부 파일에서 쓸 수 있게..)
const analytics = getAnalytics(app);