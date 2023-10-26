if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}
addEventListener("scroll", (event) => {
	document.getElementById('navbar').style.opacity=1-document.documentElement.scrollTop/400
	
	if (document.documentElement.scrollTop > 10) {
		var dropdown = document.getElementById("myLinks");
		if (dropdown.style.display === "grid") {
			navHamburger(document.getElementsByClassName("nav-hamburger")[0])
		}
	}
});

let mybutton = document.getElementById("scrollbtn")
addEventListener("scroll", (event) => {
	mybutton.style.display = "block"
	document.getElementById('scrollbtn').style.opacity=document.documentElement.scrollTop/400
})

function topFunction(){
	window.scrollTo({top: 0, behavior: 'smooth'});
}

function navHamburger(x) {
  x.classList.toggle("change");
  var dropdown = document.getElementById("myLinks");
  if (dropdown.style.display === "grid") {
    dropdown.style.display = "none";
  } else {
	  dropdown.style.display = "grid";
  }
}