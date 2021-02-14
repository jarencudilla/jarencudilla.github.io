let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

//respawn lol
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

//Start the slide!
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//go left
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

//go right
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//click left
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

//click right
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();