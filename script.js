    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showSlide(i){
        if(i<0) index = images.length -1;
        else if(i>=images.length) index=0;
        else index=i;
        slides.style.transform = 'translateX('+ (-index*100) +'%)';
    }

    prev.addEventListener('click', ()=> showSlide(index-1));
    next.addEventListener('click', ()=> showSlide(index+1));

    // Auto slide every 5 sec
    setInterval(()=> showSlide(index+1), 5000);

    // Button-ka
let scrollBtn = document.getElementById("scrollBtn");

// Markaad hoos u dhaafto 20px → button-ka muuqdo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// Marka button la gujiyo → bogga kor tag
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}