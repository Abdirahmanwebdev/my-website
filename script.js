// SCROLL ANIMATION
const fadeElements=document.querySelectorAll('.fade');
window.addEventListener('scroll',()=>{
fadeElements.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-50){
el.classList.add('show');
}
});
});

// EMAIL (basic)
function sendEmail(e){
 e.preventDefault();
 alert("Message sent! (Connect EmailJS for real email)");
}
function toggleMenu(){
 document.getElementById("navLinks").classList.toggle("active");
}
