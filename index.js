import { videoDB } from "./data.js";

const videoArt = document.getElementById("video-art");
const randomVideo = document.getElementById("random-video");
const title = document.getElementById("title");
const description = document.getElementById("description");

function chooseVideo() {
  let randomNumber = Math.floor(Math.random() * videoDB.length);
  let videoScreening = videoDB[randomNumber];
  videoArt.innerHTML = videoScreening.video;
  title.textContent = videoScreening.title;
  description.textContent = videoScreening.description;
}

randomVideo.addEventListener("click", function () {
  chooseVideo();
});

chooseVideo();

const fiveLenght = videoDB.filter(function (length) {
  return length <= 5;
});
