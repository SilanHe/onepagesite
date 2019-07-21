//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


function age(){
    birth = new Date(1997,8,1);

    var ageDifMs = Date.now() - birth.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    age =  Math.abs(ageDate.getUTCFullYear() - 1970);

    document.getElementById("age").innerHTML = age + " years old";
}

function load(){
    age();
}