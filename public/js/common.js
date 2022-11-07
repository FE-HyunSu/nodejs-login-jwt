// 기본 셋팅.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAFLpmTF1G4KEzbankxJuEtlaFejmtjQ2c',
  authDomain: 'react-study-56c25.firebaseapp.com',
  projectId: 'react-study-56c25',
  storageBucket: 'react-study-56c25.appspot.com',
  messagingSenderId: '737294251353',
  appId: '1:737294251353:web:25617a2e94c6f3658bc848',
};

const app = initializeApp(firebaseConfig);
console.log(app);

// 로그인
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js';

document.getElementById('btnLogin').addEventListener('click', (event) => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log('로그인에 성공ㅎ');
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + ' : ' + errorMessage);
    });
});
