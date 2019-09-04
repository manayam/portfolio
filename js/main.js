const backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollDistance);

function scrollDistance() {
  if (window.pageYOffset > 300) {
    //show back to top button
    backToTopBtn.style.display = "block";
  } else {
    //hide button
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
