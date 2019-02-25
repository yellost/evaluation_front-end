//---------------NAV BAR-------------//
    //-----scroll behaviour-----//
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $("nav").addClass("dark");
    } else {
        $("nav").removeClass("dark");
    }
});

    //-----burger-----//
$(".burger").click(function() {
    $(".burger").toggleClass("cross");
    $(".main-nav>ul").toggleClass("hidden");
    if ($(".main-nav>ul").hasClass("hidden")) {
        $("body").css('overflow','auto')
    } else {
        $("body").css('overflow','hidden')
    }
});


//---------------FORMS TOGGLE-------------//
$(".tab").click(function() {
    if (!$(this).hasClass("show")) {
        $(".tab.show").removeClass("show");
        $("form.show").removeClass("show");
        $(this).addClass("show");
        $("."+this.id).addClass("show");
    }
});