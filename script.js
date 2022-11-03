mainButton = document.querySelector(".main-button");
logo = document.querySelector(".logo");
body = document.querySelector("body");
header = document.querySelector("header");
content = document.querySelector(".content");
about = document.querySelector(".about");
experience = document.querySelector(".experience");
experienceButtons = document.querySelectorAll(".experience-button");
experienceDescriptionSections = document.querySelectorAll(".experience-description-section");
work = document.querySelector(".work");
contact = document.querySelector(".contact");
delayLogo = 1000;

for (let i = 0; i < experienceButtons.length; i++) {
  experienceButtons[i].addEventListener("click", onExperienceButtonClick.bind(this, i));
}

for (let i = 0; i < experienceDescriptionSections.length; i++) {
  experienceDescriptionSections[i].classList.add('non-display');
}

experienceButtons[0].classList.add('clicked');
experienceDescriptionSections[0].classList.remove('non-display');

function onExperienceButtonClick(pos) {
  for (let i = 0; i < experienceButtons.length; i++) {
    experienceButtons[i].classList.remove('clicked');
  }

  for (let i = 0; i < experienceDescriptionSections.length; i++) {
    experienceDescriptionSections[i].classList.add('non-display');
  }

  experienceButtons[pos].classList.add('clicked');
  experienceDescriptionSections[pos].classList.remove('non-display');
}

document.documentElement.style.setProperty("--delay-logo", delayLogo + "ms");

backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--color-palette-background");

funcLogo();

function funcLogo() {
  setTimeout(function () {
    logo.classList.add("non-display");
    body.style.backgroundColor = backgroundColor;
    setTimeout(function () {
      header.classList.remove("non-display");
      content.classList.remove("non-display");
      window.onscroll = function () { myFunction() };
    }, 500);

  }, delayLogo);
}

mainButton.addEventListener('click', _ => {
  location.reload();
})

function inScrollRange(a, b) {
  return (a <= document.documentElement.scrollTop && document.documentElement.scrollTop <= b);
}

function myFunction() {

  if (inScrollRange(0, 300) || screen.width < 1000) {
    document.querySelector(".content .presentation").style.opacity = "1";
  } else {
    document.querySelector(".content .presentation").style.opacity = "0";
  }

  if (inScrollRange(500, 900) || screen.width < 1000) {
    document.querySelector(".about").style.opacity = "1";
    document.querySelector(".about img").style.transform = "scale(1)";
  } else {
    document.querySelector(".about").style.opacity = "0";
    document.querySelector(".about img").style.transform = "scale(0.8)";
  }

  if (inScrollRange(1000, 1500) || screen.width < 1000) {
    document.querySelector(".experience").style.opacity = "1";
  } else {
    document.querySelector(".experience").style.opacity = "0";
  }

  if (inScrollRange(1600, 2500) || screen.width < 1000) {
    document.querySelector(".work").style.opacity = "1";
  } else {
    document.querySelector(".work").style.opacity = "0";
  }

  if (inScrollRange(2600, 3200) || screen.width < 1000) {
    document.querySelector(".contact").style.opacity = "1";
  } else {
    document.querySelector(".contact").style.opacity = "0";
  }
}