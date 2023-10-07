
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
  const database = getDatabase(app);


var fileInp = document.getElementById("fileInp")
var uploadbtn = document.getElementById("uploadbtn")

var inputdiv =  document.getElementById("inputdiv")
var imgdiv = document.getElementById("imgdiv")
var selectedImage = document.getElementById("artimg")

uploadbtn.addEventListener("click", uploadImage)

fileInp.addEventListener("change", (event)=>{
    imgdata = event.target.files[0];
    console.log(imgdata)
    imgdiv.style.display = "block"
    inputdiv.style.display = "none"

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
          selectedImage.src = img.src;
      };
    };
    reader.readAsDataURL(imgdata);
  
})


var imgdata = null

function generateUniqueProductId() {
  // Generate a unique ID logic here (e.g., UUID)
  // For simplicity, we'll use a timestamp for demonstration purposes
  return Date.now().toString();
}

var artname = document.getElementById("filenamein")


async function uploadImage(){
    const storage = getStorage();
    var artid = generateUniqueProductId()
    var imagesRef = storeref(storage,`images/${artid}${artname.value}.jpg`);
     uploadBytes(imagesRef, imgdata).then((snapshot) => {
         console.log('Uploaded a blob or file!');
         console.log(snapshot)
         alert("uploaded")
        
    });
    

    var imgurl = `https://firebasestorage.googleapis.com/v0/b/art-gallery-login-d5153.appspot.com/o/images%2F${artid}${artname.value}.jpg?alt=media`
    console.log(imgurl)
    
    const artsRef = ref(database, `artwork/${artid}${artname.value}`);
    var artdata = {
      "artname" : artname.value,
      "arturl" : imgurl
    }
    set(artsRef, artdata )
        .then(() => {
          console.log("art data uploaded")
          //  window.location = "explore.html"
         
        })
        .catch((error) => {
            console.error('Error adding art work to the database', error);
            // Handle the error, display an error message, etc.
    });
}

