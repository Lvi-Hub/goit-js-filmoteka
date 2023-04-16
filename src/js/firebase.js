import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBHYtTnrQrvyik3eNneaeIJ2Pjaq6Xv0JI',
  authDomain: 'filmotekagroupalfa.firebaseapp.com',
  projectId: 'filmotekagroupalfa',
  storageBucket: 'filmotekagroupalfa.appspot.com',
  messagingSenderId: '666551272315',
  appId: '1:666551272315:web:a35dfbac81eb75d942b3de',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const login = document.querySelector('#signin');
const logout = document.querySelector('#signout');
const googleUser = document.querySelector('#googleUser');


login.addEventListener('click', signinUser);
logout.addEventListener('click', signoutUser);


function signinUser() { 
  signInWithPopup(auth, provider)
      .then(data => {
          login.classList.add('signOut');
          logout.classList.add('signIn');
          googleUser.style.display = "block";
          renderGoogleUser(data);
    })
    .catch(error => {console.log(error)});
}

function signoutUser(){
     signOut(auth).then(() => {
      login.classList.remove('signOut');
      logout.classList.remove('signIn');
      googleUser.style.display = "none";
    }).catch(error => {
          console.log(error)
        })
      }

function renderGoogleUser(data){
          document.querySelector('#googleUser').innerHTML = `
          <img class="user-img" src="${data.user.photoURL}">
        `
}

// https://filmotekagroupalfa-default-rtdb.firebaseio.com

