mainButton = document.querySelector(".main-button");
logo = document.querySelector(".logo");
body = document.querySelector("body");
header = document.querySelector("header");
content = document.querySelector(".content");
about = document.querySelector(".about");
delayLogo = 1000;

document.documentElement.style.setProperty("--delay-logo", delayLogo + "ms");

backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--color-palette-background");

funcLogo();

function funcLogo()
{
    setTimeout(function(){ 
        logo.classList.add("non-display");
        body.style.backgroundColor = backgroundColor;
        setTimeout(function(){ 
          header.classList.remove("non-display");
          content.classList.remove("non-display");
          window.onscroll = function() {myFunction()};
      }, 500);
        
    }, delayLogo);  
}

mainButton.addEventListener('click', _ => {
    location.reload();
})

function myFunction() {

  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
  {
    document.querySelector(".content .presentation").style.opacity = "0";
  } else
  {
    document.querySelector(".content .presentation").style.opacity = "1";
  }

  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
  {
    document.querySelector(".about").style.opacity = "1";
    document.querySelector(".about img").style.transform = "scale(1)";
  } else
  {
    document.querySelector(".about").style.opacity = "0";
    document.querySelector(".about img").style.transform = "scale(0.8)";
  }
}