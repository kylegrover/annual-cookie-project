jQuery(document).ready(function($){
    $('.photo-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        infinite: true
    });
    $(".read-more").click(function(e){
        $(this).next('.read-more-content').slideToggle();
    })
})