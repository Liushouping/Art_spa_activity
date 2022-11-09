let btn = $('#button');
// 
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
// 
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// 
const swiper = new Swiper('#product', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
  delay: 3000,
},
  navigation: {
  nextEl: '.bn1',
  prevEl: '.bn2',
  clickable: true,
},
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
