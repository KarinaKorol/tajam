$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    items:1,
    autoplay:2000
})
$("#mainMenu, #footerMenu, .button ").on("click","a",function (event) {
    event.preventDefault();
    var id  = $(this).attr("href"),
        top = $(id).offset().top;
    $("body,html").animate({scrollTop: top}, 1000);
    $("#menuOpen").prop('checked', false);
});