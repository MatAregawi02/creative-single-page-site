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


