
/////responsible mode menu button/////

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav'); 
    nav.classList.toggle('active');
    
}



btnMobile.addEventListener('click', toggleMenu);



/////slides/////

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

var slideIndex = 1;
showSlides(slideIndex);

/////smooth scroll/////

const menuItems = document.querySelectorAll('#menu a, #header a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  
	 window.scroll({
	 top: to,
	 behavior: "smooth",
	 })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});