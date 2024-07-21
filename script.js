
let elem_preloader = document.getElementById("preloader");
let body = document.getElementById("body");

body.classList.add('no-scroll');

  setTimeout(function() {
    elem_preloader.classList.remove("preloader");
    body.classList.remove("no-scroll");
  }, 5280);

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

 //smoothscroll
//   const bodyy = document.body,
//    scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
//    height = scrollWrap.getBoundingClientRect().height - 1,
//    speed = 0.04;

// var offset = 0;

//    bodyy.style.height = Math.floor(height) + "px";

//    function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   var scroll = "translateY(-" + offset + "px) translateZ(0)";
// scrollWrap.style.transform = scroll;

//   callScroll = requestAnimationFrame(smoothScroll);
//  }

//   smoothScroll();




const larguraDaTela = window.innerWidth
  
if (larguraDaTela < 800) {
    var swiper3 = new Swiper(".mySwiper3", {
        grabCursor: true,
        effect: "creative",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
      });
} else {
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
  
document.getElementById('vid').play();