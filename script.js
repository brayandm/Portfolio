mainButton = document.querySelector(".main-button");
logo = document.querySelector(".logo");
body = document.querySelector("body");
header = document.querySelector("header");
content = document.querySelector(".content");
delayLogo = 6000;

document.documentElement.style.setProperty("--delay-logo", delayLogo + "ms");

backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--color-palette-background");

funcLogo();

function funcLogo()
{
    setTimeout(function(){ 
        logo.classList.add("hide");
        body.style.backgroundColor = backgroundColor;
        setTimeout(function(){ 
          header.classList.remove("hide");
          content.classList.remove("hide");
          body.style.height = "5000px";
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
    document.querySelector(".content .text").classList.remove("hide");
  } else
  {
    document.querySelector(".content .text").classList.add("hide");
  }
}