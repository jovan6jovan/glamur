// NAVIGATION
let mainNav = document.querySelector("#js-menu");
let navBarToggle = document.querySelector("#js-navbar-toggle");

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active'); // klikom na tzv. "hamburger menu" dodaje se klasa 'active', koja u css-u kazuje: display: block
});

// SCROLL TO TOP BUTTON
// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector("#scroll-to-top").style.display = "block";
    } else {
        document.querySelector("#scroll-to-top").style.display = "none";
    } 
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// GALLERY (inspired by Brad Traversy)
var current = document.querySelector("#current");
var imgs = document.querySelectorAll(".imgs img");
var opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(function (img) {
  return img.addEventListener("click", imgClick);
});

function imgClick(e) {
  // Reset the opacity
  imgs.forEach(function (img) {
    return img.style.opacity = 1;
  });

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(function () {
    return current.classList.remove("fade-in");
  }, 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}