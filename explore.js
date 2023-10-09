// for(var i = 0; i < 10; i++){
//     document.getElementById("artworks-grid").innerHTML += `
//     <div class="artwork">
//         <img src="/explore-images/art10.avif" alt="Artwork 4">
//     </div>
//     `
// }
import { getStorage, ref as storeref, uploadBytes  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
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


for(a in artworks){
    document.getElementById("artworks-grid").innerHTML += `
    <div class="artwork">
        <img src="">
    </div>
    `
}