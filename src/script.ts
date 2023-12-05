// selecting our elements
const sliderContainer = document.querySelector(".slider-container") as any;
const slideRight = document.querySelector(".right-slide") as any;
const slideLeft = document.querySelector(".left-slide") as any;
const upButton = document.querySelector(".up-button") as any;
const downButton = document.querySelector(".down-button") as any;
const slidesLength = slideRight.querySelectorAll("div").length;

// our gelobal varibale
let activeSlideIndex = 0;

//
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// our arrow function
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

// our event lisnters
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
