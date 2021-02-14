let sliderImagesz = document.querySelectorAll(".mslide"),
  marrowLeft = document.querySelector("#marrow-left"),
  marrowRight = document.querySelector("#marrow-right"),
  current = 0;

//respawn lol
function reseter() {
  for (let i = 0; i < sliderImagesz.length; i++) {
    sliderImagesz[i].style.display = "none";
  }
}

//Start the slide!
function startSlide1() {
  reseter();
  sliderImagesz[0].style.display = "block";
}

//go left
function slideLeft1() {
  reseter();
  sliderImagesz[current - 1].style.display = "block";
  current--;
}

//go right
function slideRight1() {
  reseter();
  sliderImagesz[current + 1].style.display = "block";
  current++;
}

//click left
marrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImagesz.length;
  }
  slideLeft1();
});

//click right
marrowRight.addEventListener("click", function() {
  if (current === sliderImagesz.length - 1) {
    current = -1;
  }
  slideRight1();
});

startSlide1();