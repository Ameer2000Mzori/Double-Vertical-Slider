// selecting our elements
var sliderContainer = document.querySelector(".slider-container");
var slideRight = document.querySelector(".right-slide");
var slideLeft = document.querySelector(".left-slide");
var upButton = document.querySelector(".up-button");
var downButton = document.querySelector(".down-button");
var slidesLength = slideRight.querySelectorAll("div").length;
// our gelobal varibale
var activeSlideIndex = 0;
//
slideLeft.style.top = "-".concat((slidesLength - 1) * 100, "vh");
// our arrow function
var changeSlide = function (direction) {
    var sliderHeight = sliderContainer.clientHeight;
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    }
    else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }
    slideRight.style.transform = "translateY(-".concat(activeSlideIndex * sliderHeight, "px)");
    slideLeft.style.transform = "translateY(".concat(activeSlideIndex * sliderHeight, "px)");
};
// our event lisnters
upButton.addEventListener("click", function () { return changeSlide("up"); });
downButton.addEventListener("click", function () { return changeSlide("down"); });
