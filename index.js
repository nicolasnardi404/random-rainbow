import { videoDB } from "./data.js";

const videoArt = document.getElementById("video-art");
const randomVideo = document.getElementById("random-video");
const title = document.getElementById("title");
const description = document.getElementById("description");
const selectedLength = document.getElementById("length-video");

let filteredVideos = videoDB; // Initialize filteredVideos with the whole videoDB array

function chooseVideo() {
  let randomNumber = Math.floor(Math.random() * filteredVideos.length);
  let videoScreening = filteredVideos[randomNumber];
  videoArt.innerHTML = videoScreening.video;
  title.textContent = videoScreening.title;
  description.textContent = videoScreening.description;
}

randomVideo.addEventListener("click", chooseVideo);
chooseVideo();

selectedLength.addEventListener("change", function (event) {
  let selectedLength = parseInt(event.target.value);

  if (selectedLength === 5) {
    filteredVideos = videoDB.filter(function (video) {
      return video.length <= 5;
    });
  } else if (selectedLength === 10) {
    filteredVideos = videoDB.filter(function (video) {
      return video.length <= 10;
    });
  } else if (selectedLength === 11) {
    filteredVideos = videoDB; // Assign the entire videoDB array
  }

  chooseVideo();
});
