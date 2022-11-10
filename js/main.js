$(function () {

  var mixer = mixitup('.target');

  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('filter-btn--active')
    $(this).addClass('filter-btn--active')
  })

  $(document).ready(function () {


    if (document.documentElement.clientWidth > 1200 ) {
      $('.team_slider_wrapper').slick({
        arrows: false,
        swipe: false,
        slidesToShow: 4,
        slidesToScroll: 1
      });
      $('.testimonials_slider_slick').slick({
        arrows: false,
        infinite: false,
        swipe: false,
        dots: true,
        appendDots: $('.testimonials_dots'),
      });
    }
    else if (document.documentElement.clientWidth < 440) {
      $('.team_slider_wrapper').slick({
        arrows: false,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      $('.testimonials_slider_slick').slick({
        arrows: false,
        infinite: false,
        swipe: true,
        dots: true,
        slidesToScroll: 1,
        appendDots: $('.testimonials_dots'),
      });
    }
    else if (document.documentElement.clientWidth < 650) {
      $('.team_slider_wrapper').slick({
        arrows: false,
        swipe: true,
        slidesToShow: 2,
        slidesToScroll: 1
      });
      $('.testimonials_slider_slick').slick({
        arrows: false,
        infinite: false,
        swipe: true,
        dots: true,
        slidesToScroll: 1,
        appendDots: $('.testimonials_dots'),
      });
    }
    else if (document.documentElement.clientWidth < 1200){
      $('.team_slider_wrapper').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $('.testimonials_slider_slick').slick({
        arrows: false,
        infinite: false,
        swipe: true,
        dots: true,
        slidesToScroll: 1,
        appendDots: $('.testimonials_dots'),
      });
    }
  });
  $('.team_slider_prev').on('click', function (e) {
    e.preventDefault()
    $('.team_slider_wrapper').slick('slickPrev')
  })
  $('.team_slider_next').on('click', function (e) {
    e.preventDefault()
    $('.team_slider_wrapper').slick('slickNext')
  })
  // =======================================================


  $('.testimonials_arrow_prev ').on('click', function (e) {
    e.preventDefault()
    $('.testimonials_slider_slick').slick('slickPrev')
  })
  $('.testimonials_arrow_next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials_slider_slick').slick('slickNext')
  })
})
// ====================================================================

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
      { el: this.el, multiple: this.multiple },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open')


    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open')
    }
  }

  var accordion = new Accordion($('.accordion-menu'), false);

  $('.dropdownlink').on('click', function (e) {
    e.preventDefault()
    let lass = $('.dropdownlink').hasClass('dropdownlink--active')
    if (lass)
      $('.dropdownlink').removeClass('dropdownlink--active');

    else if ($(this).not(this).hasClass('dropdownlink--active'))
      $('.dropdownlink').removeClass('dropdownlink--active');
    $(this).addClass('dropdownlink--active');

    // else if ($(this).hasClass('dropdownlink--active')) {
    //   $(this).removeClass('dropdownlink--active');
    // }
  })
  //============================================================================
  $('.burger').on('click', function (e) {
    e.preventDefault()
    if ($('.burger_background').hasClass('burger--active') === false)
      $('.burger_background').toggleClass('burger--active')
    else
      $('.burger_background').removeClass('burger--active')
  }
  )
  $('.burger').on('click', function (e) {
    e.preventDefault()
    if ($('.burger_blackout').hasClass('burger_blackout--active') === false)
      $('.burger_blackout').toggleClass('burger_blackout--active')
    else
      $('.burger_blackout').removeClass('burger_blackout--active')
  }
  )
})
