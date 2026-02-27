(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    







const gallery = document.getElementById('gallery');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close-btn');
const modalNext = document.getElementById('modalNext');
const modalPrev = document.getElementById('modalPrev');

let isTransitioning = false;
const GAP = 15;
let currentImageIndex = 0;

// CAROUSEL MOVEMENT
function handleNext() {
  if (isTransitioning) return;
  isTransitioning = true;
  const step = gallery.firstElementChild.offsetWidth + GAP;
  gallery.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
  gallery.style.transform = `translateX(-${step}px)`;
  gallery.addEventListener('transitionend', () => {
    gallery.style.transition = "none";
    gallery.appendChild(gallery.firstElementChild);
    gallery.style.transform = `translateX(0)`;
    isTransitioning = false;
  }, { once: true });
}

function handlePrev() {
  if (isTransitioning) return;
  isTransitioning = true;
  const step = gallery.lastElementChild.offsetWidth + GAP;
  gallery.style.transition = "none";
  gallery.prepend(gallery.lastElementChild);
  gallery.style.transform = `translateX(-${step}px)`;
  setTimeout(() => {
    gallery.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
    gallery.style.transform = `translateX(0)`;
  }, 10);
  gallery.addEventListener('transitionend', () => { isTransitioning = false; }, { once: true });
}

// LIGHTBOX LOGIC
function updateModal() {
  const imgs = document.querySelectorAll('.gallery-img');
  if (currentImageIndex >= imgs.length) currentImageIndex = 0;
  if (currentImageIndex < 0) currentImageIndex = imgs.length - 1;
  modalImg.src = imgs[currentImageIndex].src;
}

nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);

// Trigger expansion when clicking any image
gallery.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery-img')) {
    const imgs = Array.from(document.querySelectorAll('.gallery-img'));
    currentImageIndex = imgs.indexOf(e.target);
    updateModal();
    lightbox.style.display = "block";
    console.log("Lightbox opened for image index:", currentImageIndex);
  }
});

closeBtn.onclick = () => lightbox.style.display = "none";
modalNext.onclick = (e) => { e.stopPropagation(); currentImageIndex++; updateModal(); };
modalPrev.onclick = (e) => { e.stopPropagation(); currentImageIndex--; updateModal(); };

// Close on background click
lightbox.onclick = (e) => { if (e.target === lightbox || e.target.className === 'lightbox-content') lightbox.style.display = "none"; };



    
})(jQuery);

