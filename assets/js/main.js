

// BANNER IMAGES SLIDER
$('.banner_slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1500,
    prevArrow: '<i class="flaticon-right-arrow dandik"></i>',
    nextArrow: '<i class="flaticon-left-arrow bamdik"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
  
// BANNER SEARCH BUTTON ACTIVE WHEN CLICK
  $('.primary_btn').on('click', function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
  });
