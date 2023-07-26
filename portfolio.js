$(".menu-btn").click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

var typed = new Typed(".typing", {
    strings: ["Frontend Developer","Web Developer","website Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Frontend Developer","Web Developer","website Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// owl caroursel script
$('.owl-carousel').owlcarousel({
    margin: 20,
    loop:true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});