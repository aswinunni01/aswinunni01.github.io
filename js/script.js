let blog_buttons = document.querySelectorAll(".my-work-link");

blog_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document
      .getElementById("my-work-section")
      .scrollIntoView({ behavior: "smooth" });
  });
});

let project_buttons = document.querySelectorAll(".my-project-link");
project_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("HERERE")
    document
      .getElementById("my-project-section")
      .scrollIntoView({ behavior: "smooth" });
  });
});


addEventListener("scroll", (event) => {
  document.getElementById("navbar").style.opacity =
    1 - document.documentElement.scrollTop / 400;

  if (document.documentElement.scrollTop > 10) {
    var dropdown = document.querySelector(".nav-hamburger-links");
    if (dropdown.style.display === "grid") {
      navHamburger(document.getElementsByClassName("nav-hamburger")[0]);
    }
  }
});


// Display scrollToTop button on scrolling down
let mybutton = document.getElementById("scrollbtn");
addEventListener("scroll", (event) => {
  mybutton.style.display = document.documentElement.scrollTop === 0 ?  "none" : "block"
  document.getElementById("scrollbtn").style.opacity =
    document.documentElement.scrollTop / 400;
});

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// NavHamburger toggle logic
function navHamburger(x) {
  x.classList.toggle("change");
  var dropdown = document.querySelector(".nav-hamburger-links");
  if (dropdown.style.display === "grid") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "grid";
  }
}

