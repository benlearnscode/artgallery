
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updatePassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  import { getDatabase, set, ref, update, onValue } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  import { getStorage, ref as storeref, uploadBytes  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  

  // Initialize Firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeZl8w_rQm8qUuKocBPoqUrgkeWUUrfIM",
    authDomain: "art-gallery-login-d5153.firebaseapp.com",
    databaseURL: "https://art-gallery-login-d5153-default-rtdb.firebaseio.com",
    projectId: "art-gallery-login-d5153",
    storageBucket: "art-gallery-login-d5153.appspot.com",
    messagingSenderId: "499039381783",
    appId: "1:499039381783:web:510572ff747789c0f72f52",
    measurementId: "G-SG5HJS2J4Z"
  };


  const app = initializeApp(firebaseConfig);



var fileText =document.querySelector(".fileText");
var fileItem;
var fileName;

var fileInp = document.getElementById("fileInp")
var uploadbtn = document.getElementById("uploadbtn")

uploadbtn.addEventListener("click", uploadImage)

fileInp.addEventListener("change", (event)=>{
    fileItem = event.target.files[0];
    console.log(fileItem)
    fileName=fileItem.name;
    fileText.innerHTML=fileName;
    if (fileItem) {
    imgdata = fileItem
    }
})


var imgdata = null

async function uploadImage(){
    const storage = getStorage();

    console.log(fileName)
     var imagesRef = storeref(storage,`images/${fileName}`);
     uploadBytes(imagesRef, imgdata).then((snapshot) => {
         console.log('Uploaded a blob or file!');
         console.log(snapshot)
       });

}