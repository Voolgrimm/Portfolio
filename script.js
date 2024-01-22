let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

let discoverBtn = document.getElementById("discoverBtn");
let profileSection = document.querySelector(".profile");
let skillsSection = document.querySelector(".skills");
let projectSection = document.querySelector(".project");
let introSection = document.getElementById("introSection");

discoverBtn.onclick = function () {
  profileSection.classList.remove("hidden");
  skillsSection.classList.remove("hidden");
  projectSection.classList.remove("hidden");
  introSection.style.display = "none";
  discoverBtn.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
  let textToType =
    "Bienvenue ! Tout d'abord laisse moi me présenter je suis le professeur Kaude. \n Mon travail est de te faire découvrir le tout nouvel arrivant\n de notre monde, JIM ! Prêt ? clique sur découvrir !";

  let typedBubble = document.getElementById("typedBubble");

  let typingSpeed = 30;

  function typeText() {
    let index = 0;
    let intervalId = setInterval(function () {
      typedBubble.textContent += textToType[index];
      index++;

      if (index === textToType.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed);
  }

  typeText();
});
