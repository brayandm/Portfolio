window.onscroll = function() {myFunction()};
mainButton = document.querySelector(".main-button");

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