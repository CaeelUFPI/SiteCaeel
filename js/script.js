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

  // Inicialmente, mostra apenas a primeira foto
  photos[currentIndex].style.display = "block";

  prevButton.addEventListener("click", function() {
    // Verifica se não é a primeira foto antes de mostrar a anterior
    if (currentIndex > 0) {
      photos[currentIndex].style.display = "none";
      currentIndex--;
      photos[currentIndex].style.display = "block";
    }
  });

  nextButton.addEventListener("click", function() {
    // Verifica se não é a última foto antes de mostrar a próxima
    if (currentIndex < photos.length - 1) {
      photos[currentIndex].style.display = "none";
      currentIndex++;
      photos[currentIndex].style.display = "block";
    }
  });
});

