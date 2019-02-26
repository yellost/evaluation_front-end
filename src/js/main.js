//---------------NAV BAR-------------//
    //-----scroll behaviour-----//
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $("nav").addClass("dark");
    } else {
        $("nav").removeClass("dark");
    }
});

    //-----burger toggle-----//
$(".burger").click(function() {
    $(".burger").toggleClass("cross");
    $(".main-nav>ul").toggleClass("hidden");
    //-------disable scroll------//
    if ($(".main-nav>ul").hasClass("hidden")) {
        $("body").css('overflow','auto')
    } else {
        $("body").css('overflow','hidden')
    }
});
    //-----burger close on outside click-----//
$("li.mask").click(function () {
    $(".burger").toggleClass("cross");
    $(".main-nav>ul").toggleClass("hidden");
    $("body").css('overflow','auto');
})

//---------------FORMS TOGGLE-------------//
$(".tab").click(function() {
    if (!$(this).hasClass("show")) {
        $(".tab.show").removeClass("show");
        $("form.show").removeClass("show");
        $(this).addClass("show");
        $("."+this.id).addClass("show");
    }
});


//------------------SWIPER testimonials-------------------//
$(document).ready(function () {
    var swiper = new Swiper('#swiper1', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 320px
            990: {
              slidesPerView: 1,
              spaceBetween: 10
            }
        }
      });
  });
//------------------SWIPER testimonials-------------------//
$(document).ready(function () {
    var swiper = new Swiper('#swiper1', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 320px
            990: {
              slidesPerView: 1,
              spaceBetween: 10
            }
        }
      });
});

//------------------SWIPER pics-------------------//
$(document).ready(function () {
    var swiper = new Swiper('#swiper2', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 320px
            990: {
              slidesPerView: 1,
              spaceBetween: 10
            }
        }
      });
  });