//let's bring the icons to js
const mediaQueryMobile = window.matchMedia('(max-width : 375px)');
let hamburgerIcon = document.querySelector(".hamburger-icon");
let crossIcon = document.querySelector(".cross-icon");
let menu = document.querySelector("ul");


hamburgerIcon.addEventListener("click", () => {
  
        hamburgerIcon.style.display = "none"; //upon a click, it should disappear
        crossIcon.style.display = "inline-block";
        menu.classList.add("menu-mobile");
   
})
crossIcon.addEventListener("click", () => {
        crossIcon.style.display = "none";
        hamburgerIcon.style.display = "inline-block";
        menu.classList.remove("menu-mobile");
})

//buttons
//let's work on the left navigation
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function showSlide(index){
        slides.forEach((slide,i) => {
                slide.style.zIndex = 1;
        })

        slides[index].style.zIndex = 3;
}
showSlide(currentSlideIndex);

slides.forEach((slide, index) => {
        const prevBtn = slide.querySelector('.button-left');
        const nextBtn = slide.querySelector('.button-right');
      
        // Add event listener to the previous button
        prevBtn.addEventListener('click', () => {
          currentSlideIndex = (index - 1 + slides.length) % slides.length; // Go to previous slide
          showSlide(currentSlideIndex);
        });
      
        // Add event listener to the next button
        nextBtn.addEventListener('click', () => {
          currentSlideIndex = (index + 1) % slides.length; // Go to next slide
          showSlide(currentSlideIndex);
        });
});