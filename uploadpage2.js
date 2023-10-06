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

firebase.initializeApp(firebaseConfig);


var fileText =document.querySelector(".fileText");
var uploadPercentage =document.querySelector(".uploadPercentage");
var progress = document.querySelector(".progress");
var percentVal;
var fileItem;
var fileName;
function getFile(e){
    fileItem = e.target.files[0];
    fileName=fileItem.name;
    fileText.innerHTML=fileName;

}

function uploadImage(){

    let storageRef = firebase.storage().ref("images/"+ fileName);
    let uploadTask = storageRef.put(fileItem);


    uploadTask.on("state_changed",(snapshot)=>{
        console.log()
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        uploadPercentage.innerHTML=percentVal+"%";
        progress.style.width=percentVal+"%";

    },(error)=>{
        console.log("Error is ",error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log("URL",url);
        })




    })
}