// HAMBURGER MENU
function toggleMenu(){
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// SCROLL ANIMATION
const fadeElements = document.querySelectorAll('.fade');

function showOnScroll(){
  fadeElements.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 50){
      el.classList.add('show');
    }
  });
}

// RUN marka page furmo
window.addEventListener("load", showOnScroll);

// RUN marka scroll la sameeyo
window.addEventListener("scroll", showOnScroll);

// EMAILJS INIT
(function(){
  emailjs.init("nEAzOSl6XBQLU_E8D");
})();

// SEND EMAIL
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("service_3jgp8qd", "template_zx3jag9", this)
  .then(function(){
    alert("Message Sent ✅");
  }, function(error){
    alert("Error ❌: " + JSON.stringify(error));
  });
});
