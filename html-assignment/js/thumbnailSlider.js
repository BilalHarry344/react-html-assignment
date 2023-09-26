$(document).ready(function () {
  $(".logo-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    prevArrow:
      '<img src="./images/chevron-left.svg" alt="prev" class="slick-prev" />',
    nextArrow:
      '<img src="./images/chevron-right.svg" alt="next" class="slick-next" />',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
