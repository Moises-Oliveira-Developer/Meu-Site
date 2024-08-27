let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000);
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

function openNav(){
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav(){
  document.getElementById("sidebar").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}