let settingsLis = document.querySelectorAll(".colors-settings .ul-colors li");

let overlayLis = document.querySelectorAll(
  ".background-colors-settings .ul-colors li"
);
let overlay = document.querySelector(".overlay");

// Get Li With Active Class From Localstorage
let activeLi = localStorage.getItem("active");
let parsingAcitveLi = JSON.parse(activeLi);
let getActiveLi = document.querySelector(
  `.colors-settings .${parsingAcitveLi}`
);
if (getActiveLi) {
  getActiveLi.style.cssText = "border: 1px solid black";
}
// Get Li With Active Class From Localstorage

// Get Li With Active Class From Localstorage Overlay
let activeLiOverlay = localStorage.getItem("active-overlay");
let parsingAcitveLiOverlay = JSON.parse(activeLiOverlay);
let getActiveLiOverlay = document.querySelector(
  `.background-colors-settings .${parsingAcitveLiOverlay}`
);
if (getActiveLiOverlay) {
  getActiveLiOverlay.style.cssText = "border: 1px solid black";
}
// Get Li With Active Class From Localstorage Overlay

// Get Color From Localstorage
let settingsLocalColor = localStorage.getItem("color");
settingsLocalColor &&
  document.documentElement.style.setProperty(
    "--main-color",
    JSON.parse(settingsLocalColor)
  );
// Get Color From Localstorage
// Get BackgroundColor From Localstorage
let overlayLocalColor = localStorage.getItem("overlay");
if (overlayLocalColor) {
  overlay.style.backgroundColor = JSON.parse(overlayLocalColor);
}
// Get Background Color From Localstorage

// Background Image Changing
let landingPage = document.querySelector(".landing-page");
let arrOfImages = [
  "hd-wallpaper-g0b03a9dde_1920",
  "hd-wallpaper-g9fff8d876_1920",
  "hd-wallpaper-g7766e7f35_1920",
  "texture-g44cfecb28_1920",
  "umbrella-g9cf7e7d15_1920",
];
setInterval(() => {
  let randomNum = Math.floor(Math.random() * arrOfImages.length);
  landingPage.style.backgroundImage = `url(./images/${arrOfImages[randomNum]}.jpg)`;
}, 5000);
// Background Image Changing

// Gear Icon Add And Remove Open Class
let settings = document.querySelector(".settings");
let gear = document.querySelector(".gear");
gear.addEventListener("click", function () {
  settings.classList.toggle("open");
  this.classList.toggle("fa-spin");
});
// Gear Icon Add And Remove Open Class

// Change Main-Color Property By Li Data-Set Value And Adding Active Class
settingsLis.forEach((li) => {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color", JSON.stringify(e.target.dataset.color));
    settingsLis.forEach((li) => {
      li.classList.remove("active");
      li.style.border = "none";
    });
    e.target.classList.add("active");
    e.target.style.cssText = "border: 1px solid black";
    localStorage.setItem("active", JSON.stringify(e.target.classList[0]));
  });
});
// Change Main-Color Property By Li Data-Set Value And Adding Active Class

// Overlay Background Color
overlayLis.forEach((li) => {
  li.addEventListener("click", function (e) {
    overlay.style.backgroundColor = e.target.dataset.color;
    localStorage.setItem("overlay", JSON.stringify(e.target.dataset.color));
    overlayLis.forEach((li) => {
      li.classList.remove("active-overlay");
      li.style.border = "none";
    });
    e.target.classList.add("active-overlay");
    e.target.style.cssText = "border: 1px solid black";
    localStorage.setItem(
      "active-overlay",
      JSON.stringify(e.target.classList[0])
    );
  });
});
// Overlay Background Color

// Start Progressive Skills
let skillsParent = document.querySelector(".skills-parent");
window.onload = function () {
  let skillsOffsetTop = skillsParent.offsetTop;
  let windowScrollY = window.scrollY;
  let skillsclientHeight = skillsParent.offsetHeight;
  let windowHeight = window.innerHeight;
  let clientHeight = skillsParent.clientHeight;
  if (
    windowScrollY >=
    skillsOffsetTop + skillsclientHeight - windowHeight - clientHeight / 2
  ) {
    let allSpans = document.querySelectorAll(".skills-parent .each-skill span");
    allSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};

window.addEventListener("scroll", function(){ 
  let skillsOffsetTop = skillsParent.offsetTop;
  let windowScrollY = window.scrollY;
  let skillsclientHeight = skillsParent.offsetHeight;
  let windowHeight = window.innerHeight;
  let clientHeight = skillsParent.clientHeight;
  
  if (
    windowScrollY >=
    skillsOffsetTop + skillsclientHeight - windowHeight - clientHeight / 2
  ) {
    let allSpans = document.querySelectorAll(".skills-parent .each-skill span");
    allSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
})
// End Progressive Skills

// Start Popup Overlay
let images = document.querySelectorAll(".gallery-parent .images-parent img");

images.forEach((img) => {
  img.addEventListener("click", function (e) {
    let overlay = document.createElement("div");
    overlay.className = "gallery-overlay";
    document.body.appendChild(overlay);
    let imageBox = document.createElement("div");
    imageBox.className = "image-box";
    overlay.appendChild(imageBox);
    let h4 = document.createElement("h4");
    if (img.alt !== null) {
      h4.textContent = img.alt[0].toUpperCase() + img.alt.slice(1);
    } else {
      h4.textContent = "gallery-img";
    }
    imageBox.appendChild(h4);
    let closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.textContent = "×";
    imageBox.appendChild(closeBtn);
    let image = document.createElement("img");
    image.src = img.src;
    imageBox.appendChild(image);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className === "close") {
    e.target.remove();
    document.querySelector(".gallery-overlay").remove();
  }
});

// End Popup Overlay

// Start Tooltip
let allTooltipDiv = document.querySelectorAll(".tooltip-parent div");

allTooltipDiv.forEach((section) => {
  section.addEventListener("click", function (e) {
    document.querySelector(`${e.target.dataset.sec}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// End Tooltip

// Start Show Bullets

let showBullets = document.querySelector(".show-bullets");
let allBullets = document.querySelector(".tooltip-parent");
let localShowBulletsVal = localStorage.getItem("showbullets");
if (localShowBulletsVal) {
  if (JSON.parse(localShowBulletsVal) === "yes") {
    allBullets.style.display = "block";
    document.querySelector(".yes").style.opacity = 1
    document.querySelector(".no").style.opacity = 0.5
    
  } else if (JSON.parse(localShowBulletsVal) === "no") {
    allBullets.style.display = "none";
    document.querySelector(".yes").style.opacity = 0.5
    document.querySelector(".no").style.opacity = 1
  }
}

showBullets.addEventListener("click", function (e) {
  if (e.target.className === "yes") {
    allBullets.style.display = "block";
    document.querySelector(".yes").style.opacity = 1
    document.querySelector(".no").style.opacity = 0.5
  } else if (e.target.className === "no") {
    allBullets.style.display = "none";
    document.querySelector(".yes").style.opacity = 0.5
    document.querySelector(".no").style.opacity = 1
  }
  localStorage.setItem("showbullets", JSON.stringify(e.target.className));

});
// End Show Bullets

// Start Reset Options
let resetButton = document.querySelector(".reset-options")

resetButton.addEventListener("click", function () {
  localStorage.removeItem("color")
  localStorage.removeItem("showbullets")
  localStorage.removeItem("overlay")
  localStorage.setItem("active", JSON.stringify("first"))
  localStorage.setItem("active-overlay", JSON.stringify("first"))
  window.location.reload()
})
// End Reset Options

// Start Up Button
let upButton = document.querySelector(".up")
window.onscroll = function(){
  if(window.scrollY >= landingPage.clientHeight){
    upButton.style.display  = "block"
  }else{
    upButton.style.display  = "none"
  }
}
upButton.addEventListener("click", function () {
  window.scrollTo(0, 0)
})
// End Up Button

// Start Toggle Menu
let toggleMenu = document.querySelector(".toggle-menu")
let navUl = document.querySelector(".navbar ul")
let navUlLis = document.querySelector(".navbar ul li")
toggleMenu.addEventListener("click", function (e) {
  e.stopPropagation()
  navUl.classList.toggle("show")
})

document.addEventListener("click", function(e){
  if(e.traget !== toggleMenu && navUl.classList.contains("show")){
    navUl.classList.remove("show")
  }
})
