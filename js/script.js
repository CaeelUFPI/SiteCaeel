window.onload = function(){    
    load();
}

function load(){
    var menuBtn = document.getElementById("menu-btn");
    var navLinks = document.getElementById("nav-links");


    
    menuBtn.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
    })


}

document.addEventListener("DOMContentLoaded", function() {
  const photos = document.querySelectorAll(".photo");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;

  prevButton.addEventListener("click", function() {
    showPhoto(currentIndex - 1);
  });

  nextButton.addEventListener("click", function() {
    showPhoto(currentIndex + 1);
  });

  function showPhoto(index) {
    photos[currentIndex].classList.remove("active");
    currentIndex = (index + photos.length) % photos.length;
    photos[currentIndex].classList.add("active");
  }
});
