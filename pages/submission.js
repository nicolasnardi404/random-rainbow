import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://random-rainbow-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const videoDBPush = ref(database, "VideoDataBase")

let artistName = document.getElementById("artist-name") 
let videoTitle = document.getElementById("video-title") 
let videoLink = document.getElementById("video-link")
let description  = document.getElementById("description") 
let emailInput  = document.getElementById("email")
let socialMediaInput  = document.getElementById("social-media")
let applyBtnn = document.getElementById("apply-btn")


applyBtnn.addEventListener("click", function(){
    let artist = artistName.value;
    let title = videoTitle.value;
    let link = videoLink.value;
    let desc = description.value;
    let email = emailInput.value;
    let socialMedia = socialMediaInput.value;
 
    let newVideo = {
        artist: artist,
        title: title,
        video: link,
        description: desc,
        email: email,
        socialMedia: socialMedia
    };
 
    push(videoDBPush, newVideo).then(() => {
        console.log('Data saved successfully.');
       }).catch((error) => {
        console.log('Data could not be saved.' + error);
       });
    console.log(newVideo)
 
    cleanInput(artistName);
    cleanInput(videoTitle);
    cleanInput(videoLink);
    cleanInput(description);
    cleanInput(emailInput);
    cleanInput(socialMediaInput);
 })

function cleanInput(inputValue){
inputValue.value = ""
}

