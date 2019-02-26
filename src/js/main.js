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


//------------------SWIPER-------------------//
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
      });
  });

//------------------AXIOS & VUE-------------------//
new Vue({
    el: "#app",
    data: {
      travelList: [],
      totalPrice: 0,
      orderTypes: 0,
      sent: false
    },
    created() {
      axios.get("https://wt-4abc83e5c2056740a9e00a6e0975a49a-0.sandbox.auth0-extend.com/city-trip")
        .then(response => {
          this.travelList = response.data
        })
    },
})