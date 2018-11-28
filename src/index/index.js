import './index.scss';


function aсcordion () {
    const ACTIVE_CLASSNAME = 'leftblock-menu__container_open'
    const container = document.querySelectorAll('.leftblock-menu__container');


    for(let i = 0; i<container.length; i++){
        container[i].onclick = toggle;
    }
    function toggle() {
        switchOff()
        // if (this.container.classList.contain(ACTIVE_CLASSNAME)) {
        //     close ();
        // }else {
        //     open ();
        // }
        // if (this.classList.contains(ACTIVE_CLASSNAME)) {
        //     close ();
        // }else {
        //     open ();
        // }
        this.classList.add(ACTIVE_CLASSNAME);
    }
    function switchOff() {
        for (let i = 0; i<container.length; i++)
        container[i].classList.remove(ACTIVE_CLASSNAME);
    }

    // function close () {
    //     this.classList.remove(ACTIVE_CLASSNAME);
    // }
    // function open () {
    //     this.classList.add(ACTIVE_CLASSNAME);
    // }
}

aсcordion ()

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");


//     if (n > slides.length) {
//     slideIndex = 1
//     }
//     if (n <  1) {
//     slideIndex=slides.lenght
//     }
//     for (i=0; i <slides.lenght ; i++){
//     slides[i].style.display= "none";
//     }
//     slides[slideIndex-1].style.display="block";
// }



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}