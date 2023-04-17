import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const login = document.querySelector('#signin');
const logout = document.querySelector('#signout');
const googleUser = document.querySelector('#googleUser');


login.addEventListener('click', signinUser);
logout.addEventListener('click', signoutUser);


function signinUser(e) { 
  e.preventDefault();
  console.log(auth.currentUser);
  signInWithPopup(auth, provider)
      .then(data => {
          login.classList.add('signOut');
          logout.classList.add('signIn');
          googleUser.style.display = "block";
          renderGoogleUser(data);
    })
    .catch(error => {console.log(error)});
}

function signoutUser(e) {
    e.preventDefault();
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



