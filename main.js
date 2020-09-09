


function plusSlides(n) {
  let currentImage = document.querySelector(".slide.visible");
  let currentImageIndexString = currentImage.getAttribute("id");
  let currentImageIndexInt = parseInt(currentImageIndexString);  
  showSlides(currentImageIndexInt+n)  

}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");
  

  let currentImage = document.querySelector(".slide.visible");
  currentImage.classList.remove("visible");
  let newSlideIndex;   
  if (n > slides.length) {newSlideIndex = 0}
  
  else if (n < 1) {newSlideIndex = slides.length-1}

  else {
      newSlideIndex = n-1;
  }
  let newImage = slides[newSlideIndex];
  newImage.classList.add("visible");
} 

