$("body").on('click', '[href*="#"]', function (e) {
 var fixed_offset = 100;
 $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
 e.preventDefault();
});
if (screen.width >= 1200) {
 let bg = $('.main-cir');
 window.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.css('transform', 'translate(-' + x * 80 + 'px, -' + y * 80 + 'px)');
 });
}
$(".home-projects-slider").slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 fade: true,
 arrows: true,
 slide: ".home-projects-block",
 prevArrow: ".home-projects-prev",
 nextArrow: ".home-projects-next"
});
$('.home-projects-all').html($(".home-projects-slider").slick("getSlick").slideCount);
$(".home-projects-slider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
 $(".home-projects-curr").text(currentSlide + 1);
});